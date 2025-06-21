import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/shared/helpers/utils';
import { AntecedentsService } from 'src/app/shared/services/antecedents.service';
import { CabinetsService } from 'src/app/shared/services/cabinets.service';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { UsersService } from 'src/app/shared/services/users.service';
import {constants, prescriptions_types, bilans_types, family_situation, blood_types, genders} from "../../../shared/constants";

@Component({
  selector: 'app-patients-form',
  templateUrl: './patients-form.component.html',
  styleUrls: ['./patients-form.component.scss']
})
export class PatientsFormComponent implements OnInit {
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
    bilans: [],
    existing_antecedents: [],
    existing_prescriptions: [],
    existing_bilans: [],
    remove_antecedents: [],
    remove_prescriptions: [],
    remove_bilans: [],
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
  steps = [
    {
      key: "step_1",
      name: "Infos générales"
    },
    {
      key: "step_2",
      name: "Antécédents"
    },
    {
      key: "step_3",
      name: "Historiques des ordonnances"
    },
    {
      key: "step_4",
      name: "Historique des bilans et examens"
    },
  ];
  active_step = 0;
  cabinets: any = [];
  antecedents: any = [];
  doctors: any = [];
  all_doctors: any = [];

  constructor(
    private patientsService: PatientsService,
    private antecedentsService: AntecedentsService,
    private cabinetsService: CabinetsService,
    private usersService: UsersService,
    private modalService: NgbModal,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.antecedentsService.all({params: {enabled: 1}}).subscribe(
      (result) => {
        console.log(result)
        this.antecedents = result.data;
      }, 
      (error) => {
      }
    )
    this.cabinetsService.all({params: {enabled: 1}}).subscribe(
      (result) => {
        console.log(result)
        this.cabinets = result.data;
      }, 
      (error) => {
      }
    )
    this.usersService.all({params: {type: "doctor", enabled: 1}}).subscribe(
      (result) => {
        console.log(result)
        this.all_doctors = result.data;
        if (this.selectedElement) {
          this.onCabinetChange(this.selectedElement.cabinet_id);
        }
      }, 
      (error) => {
      }
    )
    this.data = {
      cabinet_id: this.selectedElement ? this.selectedElement.cabinet_id : null,
      doctor_id: this.selectedElement ? this.selectedElement.doctor_id : null,
      firstname: this.selectedElement ? this.selectedElement.firstname : null,
      lastname: this.selectedElement ? this.selectedElement.lastname : null,
      birthday: this.selectedElement ? this.selectedElement.birthday : null,
      phone_number: this.selectedElement ? this.selectedElement.phone_number : null,
      email: this.selectedElement ? this.selectedElement.email : null,
      gender: this.selectedElement ? this.selectedElement.gender : null,
      civility: this.selectedElement ? this.selectedElement.civility : null,
      assurance: this.selectedElement ? this.selectedElement.assurance : null,
      blood_type: this.selectedElement ? this.selectedElement.blood_type : null,
      note: this.selectedElement ? this.selectedElement.note : null,
      antecedents: [],
      prescriptions: [],
      bilans: [],
      existing_antecedents: [],
      existing_prescriptions: [],
      existing_bilans: [],
      remove_antecedents: [],
      remove_prescriptions: [],
      remove_bilans: [],
    };
    if (this.selectedElement) {
      this.data.existing_antecedents = this.selectedElement.antecedents;
      this.data.existing_prescriptions = this.selectedElement.prescriptions.map(el => {
        el.new_images = [];
        el.remove_images = [];
        return el;
      });
      this.data.existing_bilans = this.selectedElement.bilans.map(el => {
        el.new_images = [];
        el.remove_images = [];
        return el;
      });
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
    for (let key in this.data.bilans) {
      if (this.data.bilans[key].images.length > 0) {
        this.data.bilans[key].images = await Utils.convertFilesToBase64(this.data.bilans[key].images);
      }
    }
    for (let key in this.data.prescriptions) {
      if (this.data.prescriptions[key].images.length > 0) {
        this.data.prescriptions[key].images = await Utils.convertFilesToBase64(this.data.prescriptions[key].images);
      }
    }
    for (let key in this.data.existing_bilans) {
      if (this.data.existing_bilans[key].new_images.length > 0) {
        this.data.existing_bilans[key].new_images = await Utils.convertFilesToBase64(this.data.existing_bilans[key].new_images);
      }
    }
    for (let key in this.data.existing_prescriptions) {
      if (this.data.existing_prescriptions[key].new_images.length > 0) {
        this.data.existing_prescriptions[key].new_images = await Utils.convertFilesToBase64(this.data.existing_prescriptions[key].new_images);
      }
    }
    this.isLoading = true;
    if (this.selectedElement) {
      this.patientsService.update(this.selectedElement.id, this.data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.patientsService.create(this.data).subscribe(
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
    if (typeof error === "string") {
      this._snackBar.open(error, 'Ok', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['danger-snackbar']
      });
    } else {
      let errorDetails = error.error.data;
      for (let errorKey in errorDetails)
        this._snackBar.open(errorDetails[errorKey], 'Ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ['danger-snackbar']
        });
    }
  }

  onCabinetChange(cabinet_id) {
    this.doctors = this.all_doctors.filter(el => el.cabinet_id == cabinet_id);
  }

  getActiveStepName() {
    return this.steps[this.active_step].name;
  }

  changeStep(forward = true) {
    if (forward && this.active_step < this.steps.length - 1) {
      if (this.active_step === 0) {
        const controls = Object.values(this.form.controls);
        for(let control of controls) {
          if(control.invalid) {
            control.markAsTouched();
          }
        }
        if (this.form.invalid) {
          this.onError("Veuillez remplir tous les champs obligatoires");
          return;
        }
      }
      this.active_step++;
    } else if (!forward && this.active_step > 0) {
      this.active_step--;
    }
  }

  addAntecedent() {
    this.data.antecedents.push({
      id: Utils.generateUniqueId(),
      antecedent_id: null,
      title: null,
      start_date: null,
      end_date: null,
    });
  }

  addBilan() {
    this.data.bilans.push({
      id: Utils.generateUniqueId(),
      type: null,
      date: null,
      images: []
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

  onSelectBilanImage(event, index) {
    console.log(event);
    this.data.bilans[index].images.push(...event.addedFiles);
  }

  onRemoveBilanImage(event, index) {
    console.log(event);
    this.data.bilans[index].images.splice(this.data.bilans[index].images.indexOf(event), 1);
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
