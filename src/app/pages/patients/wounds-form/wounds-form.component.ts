import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import html2canvas from 'html2canvas';
import * as moment from 'moment';
import { constants, etiologies, wounds_type, wounds_zones, duration_types } from 'src/app/shared/constants';
import { Utils } from 'src/app/shared/helpers/utils';
import { CanvasesService } from 'src/app/shared/services/canvases.service';
import { MedicinesService } from 'src/app/shared/services/medicines.service';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { WoundsService } from 'src/app/shared/services/wounds.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wounds-form',
  templateUrl: './wounds-form.component.html',
  styleUrls: ['./wounds-form.component.scss']
})
export class WoundsFormComponent implements OnInit {
  url = environment.url;
  title = constants.PLAIES;
  data: any = {
    patient_id: null,
    type: null,
    etiologie: null,
    zone: null,
    prescriptions: [],
    treatments_count: null,
    duration_type: null,
    duration: null,
    date: null,
    remove_prescriptions: [],
  };
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  wounds_type = wounds_type;
  etiologies = etiologies;
  wounds_zones = wounds_zones;
  duration_types = duration_types;
  @Input() selectedElement;
  @Input() patient;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  canvases: any = [];
  medicines: any = [];
  prescriptions: any = [];

  constructor(
    private woundsService: WoundsService,
    private canvasesService: CanvasesService,
    private medicinesService: MedicinesService,
    private modalService: NgbModal,
    private _snackBar: MatSnackBar
    ) {
      this.data.patient_id = this.patient?.id;
    }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.canvasesService.all({params: {enabled: 1, type: "PT"}}).subscribe(
      (result) => {
        console.log(result)
        this.canvases = result.data;
      }, 
      (error) => {
      }
    )
    this.medicinesService.all({params: {enabled: 1, type: "Plaie"}}).subscribe(
      (result) => {
        console.log(result)
        this.medicines = result.data;
      }, 
      (error) => {
      }
    )
    this.data = {
      type: this.selectedElement ? this.selectedElement.type : null,
      etiologie: this.selectedElement ? this.selectedElement.etiologie : null,
      zone: this.selectedElement ? this.selectedElement.zone : null,
      treatments_count: this.selectedElement ? this.selectedElement.treatments_count : null,
      duration_type: this.selectedElement ? this.selectedElement.duration_type : null,
      duration: this.selectedElement ? this.selectedElement.duration : null,
      prescriptions: [],
      existing_prescriptions: [],
      remove_prescriptions: [],
    };
    if (this.selectedElement) {
      this.data.existing_prescriptions = this.selectedElement.prescriptions;
    }
  }

  onClose() {
    this.closingEvent.emit();
  }

  toggleStatus() {
    this.data.enabled = !this.data.enabled;
  }

  async onSubmit() {
    const controls = Object.values(this.form.controls);
    for(let control of controls) {
      if(control.invalid) {
        return;
      }
    }
    for (let key in this.data.prescriptions) {
      if (this.data.prescriptions.length > 0) {
        this.data.prescriptions = await Utils.convertFilesToBase64(this.data.prescriptions);
      }
    }
    this.isLoading = true;
    if (this.selectedElement) {
      this.woundsService.update(this.selectedElement.id, this.data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.woundsService.create(this.data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    }
  }

  onSelectElementImage(event, element_key) {
    console.log(event);
    this.data[element_key].push(...event.addedFiles);
  }

  onRemoveElementImage(event, element_key) {
    console.log(event);
    this.data[element_key].splice(this.data[element_key].indexOf(event), 1);
  }

  onSuccess(result) {
    this.isLoading = false;
    this.reloadEvent.emit();
    this.modalService.dismissAll();
    this._snackBar.open('Enregistré avec succès!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

  removeElementFromArray(key, index, remove_key = null) {
    if (remove_key) {
      this.data[remove_key].push(this.data[key][index].id);
    }
    this.data[key].splice(index, 1);
  }

  addPrescription() {
    this.prescriptions.push({
      id: Utils.generateUniqueId(),
      canvas_id: null,
      canvas: null,
      medicines: [],
      generating: false
    });
  }
  removePrescription(index) {
    this.prescriptions.splice(index, 1);
  }

  addMedicine(index) {
    this.prescriptions[index].medicines.push({
      id: Utils.generateUniqueId(),
      medicine_id: null,
      medicine: null,
      posologie: null
    });
  }
  removeMedicine(index, medicine) {
    this.prescriptions[index].medicines[medicine].splice(index, 1);
  }

  generatePrescription(index) {
    if (!this.prescriptions[index].generating) {
      this.prescriptions[index].canvas = {...this.canvases.find(el => el.id === this.prescriptions[index].canvas_id)};
      if (this.prescriptions[index].canvas) {
        this.prescriptions[index].canvas.head = this.replaceVariables(this.prescriptions[index].canvas.head);
        this.prescriptions[index].canvas.body = this.replaceVariables(this.prescriptions[index].canvas.body);
        this.prescriptions[index].canvas.footer = this.replaceVariables(this.prescriptions[index].canvas.footer);
      }
      for (let medicineKey in this.prescriptions[index].medicines) {
        this.prescriptions[index].medicines[medicineKey].medicine = this.medicines.find(el => el.id === this.prescriptions[index].medicines[medicineKey].medicine_id);
      }
    }
    this.prescriptions[index].generating = !this.prescriptions[index].generating;
  }

  replaceVariables(content) {
    if (content) {
      content = content.replace(/{nomPatient}/g, this.patient?.lastname);
      content = content.replace(/{prenomPatient}/g, this.patient?.firstname);
      content = content.replace(/{docteur}/g, this.patient?.doctor?.name);
      content = content.replace(/{clinique}/g, this.patient?.cabinet?.name);
      content = content.replace(/{dateDocument}/g, moment().format("DD-MM-YYYY"));
    }
    return content;
  }

  confirmGeneratePrescription(index) {
    const div = document.getElementById('prescription-preview') as HTMLElement;

    html2canvas(div).then(canvas => {
      const base64Image = canvas.toDataURL('image/png');
      this.data.prescriptions.push(base64Image);
      this.prescriptions.splice(index, 1);
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  onError(error) {
    this.isLoading = false;
    let errorDetails = error.error.data;
    for (let errorKey in errorDetails)
      this._snackBar.open(errorDetails[errorKey], 'Ok', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['danger-snackbar']
      });
  }
}
