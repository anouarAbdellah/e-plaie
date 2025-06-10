import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicinesService } from 'src/app/shared/services/medicines.service';
import {constants, medicines_categories, medicines_types, medicines_variants} from "../../../shared/constants";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-medicines-form',
  templateUrl: './medicines-form.component.html',
  styleUrls: ['./medicines-form.component.scss']
})
export class MedicinesFormComponent implements OnInit {
  title = constants.MEDICINES;
  data;
  isLoading = false;
  types = medicines_types;
  categories = medicines_categories;
  sub_categories = [];
  variants = medicines_variants;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();

  constructor(private medicinesService: MedicinesService, private modalService: NgbModal, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      type: this.selectedElement ? this.selectedElement.type : "",
      code: this.selectedElement ? this.selectedElement.code : "",
      name: this.selectedElement ? this.selectedElement.name : "",
      variant: this.selectedElement ? this.selectedElement.variant : "",
      category: this.selectedElement ? this.selectedElement.category : "",
      sub_category: this.selectedElement ? this.selectedElement.sub_category : "",
      buying_price: this.selectedElement ? this.selectedElement.buying_price : "",
      selling_price: this.selectedElement ? this.selectedElement.selling_price : "",
      enabled: this.selectedElement ? this.selectedElement.enabled : true
    };
    this.onChangeCategory();
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
      this.medicinesService.update(this.selectedElement.id, this.data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.medicinesService.create(this.data).subscribe(
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

  onChangeCategory() {
    const selected_category = this.categories.find((el: any) => el.name === this.data.category);
    if (selected_category) {
      this.sub_categories = [...selected_category.sub_categories];
    } else {
      this.sub_categories = [];
    }
  }
}
