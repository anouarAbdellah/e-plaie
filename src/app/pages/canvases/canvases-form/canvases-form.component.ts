import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {constants, canvas_account_types, canvas_types} from "../../../shared/constants";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CanvasesService } from 'src/app/shared/services/canvases.service';

@Component({
  selector: 'app-canvases-form',
  templateUrl: './canvases-form.component.html',
  styleUrls: ['./canvases-form.component.scss']
})
export class CanvasesFormComponent implements OnInit {
  logo;
  logoURL;
  title = constants.CANVAS;
  data;
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  account_types = canvas_account_types;
  types = canvas_types;
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  firstpage = true;


  constructor(private canvasesService: CanvasesService, private modalService: NgbModal, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      type: this.selectedElement ? this.selectedElement.type : "",
      code: this.selectedElement ? this.selectedElement.code : "",
      name: this.selectedElement ? this.selectedElement.name : "",
      account_type: this.selectedElement ? this.selectedElement.account_type : "",
      head: this.selectedElement ? this.selectedElement.head : "",
      body: this.selectedElement ? this.selectedElement.body : "",
      footer: this.selectedElement ? this.selectedElement.footer : "",
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

  dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
  }

  onClose() {
    this.closingEvent.emit();
  }

  toggleStatus() {
    this.data.enabled = !this.data.enabled;
  }

  backToFirstPage() {
    this.firstpage = true;
  }

  onSubmit() {
    if (this.firstpage) {
      this.firstpage = false;
    } else{

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
        this.canvasesService.update(this.selectedElement.id, data).subscribe(
          (result) => {
            this.onSuccess(result);
          },
          (error) => {
            this.onError(error);
          }
        )
      } else {
        this.canvasesService.create(data).subscribe(
          (result) => {
            this.onSuccess(result);
          },
          (error) => {
            this.onError(error);
          }
        )
      }
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
