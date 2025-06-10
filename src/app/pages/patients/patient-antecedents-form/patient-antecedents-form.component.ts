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
import { PatientsService } from 'src/app/shared/services/patients.service';
import {constants} from "../../../shared/constants";

@Component({
  selector: 'app-patient-antecedents-form',
  templateUrl: './patient-antecedents-form.component.html',
  styleUrls: ['./patient-antecedents-form.component.scss']
})
export class PatientAntecedentsFormComponent implements OnInit {
  title = constants.PATIENTS;
  data: any = {
    antecedents: [],
    existing_antecedents: [],
    remove_antecedents: [],
  };
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  antecedents: any = [];

  constructor(
    private patientsService: PatientsService,
    private antecedentsService: AntecedentsService,
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
    );
    this.addAntecedent();
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
    this.isLoading = true;
    this.patientsService.save_antecedents(this.selectedElement.id, this.data).subscribe(
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

  addAntecedent() {
    this.data.antecedents.push({
      id: Utils.generateUniqueId(),
      antecedent_id: null,
      title: null,
      start_date: null,
      end_date: null,
    });
  }

  removeElementFromArray(key, index, remove_key = null) {
    if (remove_key) {
      this.data[remove_key].push(this.data[key][index].id);
    }
    this.data[key].splice(index, 1);
  }

  trackByFn(index, item) {
    return item.id;
  }
}
