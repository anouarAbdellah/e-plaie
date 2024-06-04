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
import {constants, users_types} from "../../../shared/constants";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  title = constants.USERS;
  data: any = {
    cabinet_id: null,
    name: null,
    email: null,
    password: null,
    type: null,
    enabled: null,
  };
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  users_types = users_types;
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  cabinets: any = [];

  constructor(
    private cabinetsService: CabinetsService,
    private usersService: UsersService,
    private modalService: NgbModal,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      cabinet_id: this.selectedElement ? this.selectedElement.cabinet_id : null,
      name: this.selectedElement ? this.selectedElement.name : null,
      email: this.selectedElement ? this.selectedElement.email : null,
      password: this.selectedElement ? this.selectedElement.password : null,
      type: this.selectedElement ? this.selectedElement.type : null,
      enabled: this.selectedElement ? this.selectedElement.enabled : null
    };
    this.cabinetsService.all({params: {enabled: 1}}).subscribe(
      (result) => {
        console.log(result)
        this.cabinets = result.data;
      }, 
      (error) => {
      }
    )
  }

  onClose() {
    this.closingEvent.emit();
  }

  async onSubmit() {
    const controls = Object.values(this.form.controls);
    for(let control of controls) {
      if(control.invalid) {
        return;
      }
    }
    this.isLoading = true;
    if (this.selectedElement) {
      this.usersService.update(this.selectedElement.id, this.data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.usersService.create(this.data).subscribe(
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

  toggleStatus() {
    this.data.enabled = !this.data.enabled;
  }
}
