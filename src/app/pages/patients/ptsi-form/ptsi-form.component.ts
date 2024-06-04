import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/shared/helpers/utils';
import { PatientsService } from 'src/app/shared/services/patients.service';
import {constants, wounds_zones, wound_colorations, wound_coloration_codes, wound_phases, wound_steps, wound_stades, wound_tissus, wound_humidity} from "../../../shared/constants";

@Component({
  selector: 'app-ptsi-form',
  templateUrl: './ptsi-form.component.html',
  styleUrls: ['./ptsi-form.component.scss']
})
export class PtsiFormComponent implements OnInit {
  title = constants.PTSI;
  data: any = {
    wound_id: null,
    zone: null,
    phase: null,
    step: null,
    stade: null,
    tissus: null,
    inflammation: null,
    humidity: null,
    berge_width: null,
    berge_height: null,
    wound_width: null,
    wound_height: null,
    wound_depth: null,
    colorations: [],
    images: [],
    existing_colorations: [],
    existing_images: [],
    remove_colorations: [],
    remove_images: [],
  };
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  wounds_zones = wounds_zones;
  wound_colorations = wound_colorations;
  wound_coloration_codes = wound_coloration_codes;
  wound_phases = wound_phases;
  wound_steps = [];
  wound_stades = wound_stades;
  wound_tissus = wound_tissus;
  wound_humidity = wound_humidity;
  @Input() selectedElement;
  @Input() wound;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  steps = [
    {
      key: "step_1",
      name: "Constituer un PTSI"
    },
    {
      key: "step_2",
      name: "Constituer un PTSI : T.I.M.E"
    },
    {
      key: "step_3",
      name: "Chargez des images de la plaie"
    }
  ];
  active_step = 0;

  constructor(
    private patientsService: PatientsService,
    private modalService: NgbModal,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      wound_id: this.wound?.id,
      zone: this.selectedElement ? this.selectedElement.zone : null,
      phase: this.selectedElement ? this.selectedElement.phase : null,
      step: this.selectedElement ? this.selectedElement.step : null,
      stade: this.selectedElement ? this.selectedElement.stade : null,
      tissus: this.selectedElement ? this.selectedElement.tissus : null,
      inflammation: this.selectedElement ? this.selectedElement.inflammation : null,
      humidity: this.selectedElement ? this.selectedElement.humidity : null,
      berge_width: this.selectedElement ? this.selectedElement.berge_width : null,
      berge_height: this.selectedElement ? this.selectedElement.berge_height : null,
      wound_width: this.selectedElement ? this.selectedElement.wound_width : null,
      wound_height: this.selectedElement ? this.selectedElement.wound_height : null,
      wound_depth: this.selectedElement ? this.selectedElement.wound_depth : null,
      colorations: [],
      images: [],
      existing_colorations: [],
      existing_images: [],
      remove_colorations: [],
      remove_images: [],
    };
    if (this.selectedElement) {
      this.onPhaseChange(this.selectedElement.phase);
      this.data.existing_colorations = this.selectedElement.colors;
      this.data.existing_images = this.selectedElement.images;
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
    const dataToSend = Utils.generateFormData(this.data);
    console.log(dataToSend)
    this.isLoading = true;
    if (this.selectedElement) {
      this.patientsService.update_ptsi(this.selectedElement.id, dataToSend).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.patientsService.create_ptsi(dataToSend).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    }
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


  getActiveStepName() {
    return this.steps[this.active_step].name;
  }

  changeStep(forward = true) {
    if (forward && this.active_step < this.steps.length - 1) {
      this.active_step++;
    } else if (!forward && this.active_step > 0) {
      this.active_step--;
    }
  }

  addColoration() {
    this.data.colorations.push({
      id: Utils.generateUniqueId(),
      color: null,
      percentage: null
    });
  }

  onSelectImage(event) {
    console.log(event);
    this.data.images.push(...event.addedFiles);
  }

  onRemoveImage(event) {
    console.log(event);
    this.data.images.splice(this.data.images.indexOf(event), 1);
  }

  removeColoration(index) {
    this.data.remove_colorations.push(this.data.existing_colorations[index].id);
    this.data.existing_colorations.splice(index, 1);
  }

  removeExistingImage(index) {
    this.data.remove_images.push(this.data.existing_images[index].id);
    this.data.existing_images.splice(index, 1);
  }

  trackByFn(index, item) {
    return item.id;
  }

  onPhaseChange(phase) {
    this.data.phase = phase;
    this.wound_steps = wound_steps[phase];
  }
}
