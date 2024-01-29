import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModulesService } from 'src/app/shared/services/custom-modules.service';
import {constants, custom_module_field_types} from "../../../shared/constants";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-modules-form',
  templateUrl: './custom-modules-form.component.html',
  styleUrls: ['./custom-modules-form.component.scss']
})
export class CustomModulesFormComponent implements OnInit {
  title = constants.CUSTOM_MODULES;
  data;
  types = custom_module_field_types;
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  fields = [];
  steps = [];

  constructor(private customModulesService: CustomModulesService, private modalService: NgbModal, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      name: this.selectedElement ? this.selectedElement.name : "",
      icon: this.selectedElement ? this.selectedElement.icon : ""
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
      this.customModulesService.update(this.selectedElement.id, this.data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      let data = {
        ...this.data,
        fields: this.fields,
        steps: this.steps
      }
      console.log(data)
      this.customModulesService.create(data).subscribe(
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

  addField() {
    this.fields.push({
      name: "",
      type: "",
      show_in_list: true,
      is_required: true,
      options: []
    });
  }
  removeField(index) {
    this.fields.splice(index, 1);
  }
  toggleFieldCheckbox(index, key) {
    this.fields[index][key] = !this.fields[index][key];
  }
  addOption(index) {
    this.fields[index].options.push({
      value: ""
    });
  }
  removeOption(index, option_index) {
    this.fields[index].options.splice(option_index, 1);
  }
  addStep() {
    this.steps.push({
      name: "",
      order: "",
      fields: []
    })
  }
  removeStep(index) {
    this.steps.splice(index, 1);
  }
  addStepField(index) {
    this.steps[index].fields.push({
      name: "",
      type: "",
      show_in_list: true,
      is_required: true,
      options: []
    });
  }
  removeStepField(index, field_index) {
    this.steps[index].fields.splice(field_index, 1);
  }
  addStepOption(index, field_index) {
    this.steps[index].fields[field_index].options.push({
      value: ""
    });
  }
  removeStepOption(index, field_index, option_index) {
    this.steps[index].fields[field_index].options.splice(option_index, 1);
  }
  toggleStepFieldCheckbox(index, field_index, key) {
    this.steps[index].fields[field_index][key] = !this.steps[index].fields[field_index][key];
  }
}
