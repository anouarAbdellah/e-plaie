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
import {constants, prescriptions_types, bilans_types, family_situation, blood_types, genders} from "../../../shared/constants";

@Component({
  selector: 'app-patient-prescriptions-form',
  templateUrl: './patient-prescriptions-form.component.html',
  styleUrls: ['./patient-prescriptions-form.component.scss']
})
export class PatientPrescriptionsFormComponent implements OnInit {
  title = constants.PATIENTS;
  data: any = {
    cabinet_id: null,
    doctor_id: null,
    firstname: null,
    lastname: null,
    birthday: null,
    phone_number: null,
    email: null,
    gender: null,
    civility: null,
    assurance: null,
    blood_type: null,
    note: null,
    antecedents: [],
    prescriptions: [],
  };
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  prescriptions_types = prescriptions_types;
  bilans_types = bilans_types;
  family_situation = family_situation;
  blood_types = blood_types;
  genders = genders;
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();

  constructor(
    private patientsService: PatientsService,
    private modalService: NgbModal,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.addPrescription();
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
      if (this.data.prescriptions[key].images.length > 0) {
        this.data.prescriptions[key].images = await Utils.convertFilesToBase64(this.data.prescriptions[key].images);
      }
    }
    for (let key in this.data.existing_prescriptions) {
      if (this.data.existing_prescriptions[key].new_images.length > 0) {
        this.data.existing_prescriptions[key].new_images = await Utils.convertFilesToBase64(this.data.existing_prescriptions[key].new_images);
      }
    }
    this.isLoading = true;
    this.patientsService.save_perscriptions(this.selectedElement.id, this.data).subscribe(
      (result) => {
        this.onSuccess(result);
      },
      (error) => {
        this.onError(error);
      }
    );
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

  addPrescription() {
    this.data.prescriptions.push({
      id: Utils.generateUniqueId(),
      type: null,
      date: null,
      images: []
    });
  }

  onSelectPrescriptionImage(event, index, key = 'images') {
    console.log(event);
    this.data.prescriptions[index][key].push(...event.addedFiles);
  }

  onRemovePrescriptionImage(event, index, key = 'images') {
    console.log(event);
    this.data.prescriptions[index][key].splice(this.data.prescriptions[index][key].indexOf(event), 1);
  }

  onSelectElementImage(event, index, element_key, key = 'images') {
    console.log(event);
    this.data[element_key][index][key].push(...event.addedFiles);
  }

  onRemoveElementImage(event, index, element_key, key = 'images') {
    console.log(event);
    this.data[element_key][index][key].splice(this.data[element_key][index][key].indexOf(event), 1);
  }

  removeElementFromArray(key, index, remove_key = null) {
    if (remove_key) {
      this.data[remove_key].push(this.data[key][index].id);
    }
    this.data[key].splice(index, 1);
  }

  removeExistingImage(key, element_key, index, remove_key = null) {
    if (remove_key) {
      this.data[key][element_key][remove_key].push(this.data[key][element_key].images[index].id);
    }
    this.data[key][element_key].images.splice(index, 1);
  }

  trackByFn(index, item) {
    return item.id;
  }
}
