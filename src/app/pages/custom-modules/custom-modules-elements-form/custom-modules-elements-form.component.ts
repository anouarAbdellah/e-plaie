import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModulesService } from 'src/app/shared/services/custom-modules.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-modules-elements-form',
  templateUrl: './custom-modules-elements-form.component.html',
  styleUrls: ['./custom-modules-elements-form.component.scss']
})
export class CustomModulesElementsFormComponent implements OnInit {
  data;
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() selectedElement;
  @Input() custom_module;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  fields = [];
  steps = [];
  active_step = null;

  constructor(private customModulesService: CustomModulesService, private modalService: NgbModal, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.data = {};
    for (let field of this.custom_module.fields) {
      this.data[field.id] = "";
    }
    this.active_step = null;
    this.data.steps = {};
    for (let step of this.custom_module.steps) {
      this.data.steps[step.id] = {};
      if (!this.active_step) {
        this.active_step = step.id;
      }
      for (let field of step.fields) {
        this.data.steps[step.id][field.id] = "";
      }
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

    } else {
      let fields = [];
      let steps = [];
      for (let key in this.data) {
        if (key === "steps") {
          for (let step_key in this.data.steps) {
            for (let step_field_key in this.data.steps[step_key]) {
              steps.push({
                module_step_id: Number(step_key),
                module_step_field_id: Number(step_field_key),
                value: this.data.steps[step_key][step_field_key]
              });
            }
          }
        } else {
          fields.push({
            module_field_id: Number(key),
            value: this.data[key]
          });
        }
      }
      let data = {
        fields: fields,
        steps: steps
      };
      console.log(steps);
      this.customModulesService.create_elements(this.custom_module.id, data).subscribe(
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

  onActiveStepChange(step) {
    this.active_step = step;
  }
}
