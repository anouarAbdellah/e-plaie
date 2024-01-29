import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {constants, specialities, cities} from "../../../shared/constants";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CabinetsService } from 'src/app/shared/services/cabinets.service';

@Component({
  selector: 'app-cabinets-form',
  templateUrl: './cabinets-form.component.html',
  styleUrls: ['./cabinets-form.component.scss']
})
export class CabinetsFormComponent implements OnInit {
  logo;
  logoURL;
  title = constants.CABINETS;
  data;
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  specialities = specialities;
  cities = cities;
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();

  constructor(private cabinetsService: CabinetsService, private modalService: NgbModal, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      type: this.selectedElement ? this.selectedElement.type : "",
      code: this.selectedElement ? this.selectedElement.code : "",
      name: this.selectedElement ? this.selectedElement.name : "",
      speciality: this.selectedElement ? this.selectedElement.speciality : "",
      address: this.selectedElement ? this.selectedElement.address : "",
      phone_number: this.selectedElement ? this.selectedElement.phone_number : "",
      city: this.selectedElement ? this.selectedElement.city : "",
      email: this.selectedElement ? this.selectedElement.email : "",
      logo: null,
      enabled: this.selectedElement ? this.selectedElement.enabled : true
    }
  }

  onChangeImage(event: any) {
    this.data.logo =event.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => { 
      this.logoURL = reader.result; 
    }
    reader.readAsDataURL(this.data.logo);
  }

  onClose() {
    this.closingEvent.emit();
  }

  toggleStatus() {
    this.data.enabled = !this.data.enabled;
  }

  onSubmit() {
    const controls = Object.values(this.form.controls);
    for(let control of controls) {
      if(control.invalid) {
        return;
      }
    }
    this.isLoading = true;
    let data = new FormData();
    for (let key in this.data) {
      if (this.data[key]) data.append(key, this.data[key]);
    }
    if (this.selectedElement) {
      this.cabinetsService.update(this.selectedElement.id, data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.cabinetsService.create(data).subscribe(
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
}
