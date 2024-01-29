import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {constants, bilans_types} from "../../../shared/constants";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BilansService } from 'src/app/shared/services/bilans.service';

@Component({
  selector: 'app-bilans-form',
  templateUrl: './bilans-form.component.html',
  styleUrls: ['./bilans-form.component.scss']
})
export class BilansFormComponent implements OnInit {
  title = constants.BILANS;
  data;
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  types = bilans_types;
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();

  constructor(private bilansService: BilansService, private modalService: NgbModal, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      type: this.selectedElement ? this.selectedElement.type : "",
      code: this.selectedElement ? this.selectedElement.code : "",
      name: this.selectedElement ? this.selectedElement.name : "",
      enabled: this.selectedElement ? this.selectedElement.enabled : true
    }
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
    if (this.selectedElement) {
      this.bilansService.update(this.selectedElement.id, this.data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.bilansService.create(this.data).subscribe(
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
