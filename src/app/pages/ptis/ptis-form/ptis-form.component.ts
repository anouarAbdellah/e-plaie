import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {constants, ptis_etiologies} from "../../../shared/constants";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { PtisService } from 'src/app/shared/services/ptis.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ptis-form',
  templateUrl: './ptis-form.component.html',
  styleUrls: ['./ptis-form.component.scss']
})
export class PtisFormComponent implements OnInit {
  title = constants.MOTIFS;
  data;
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  etiologies = ptis_etiologies;
  defaultImages = [];
  defaultVideos = [];
  defaultLinks = [];
  @Input() selectedElement;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();

  constructor(private ptisService: PtisService, private modalService: NgbModal, private _snackBar: MatSnackBar, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.data = {
      etiology: this.selectedElement ? this.selectedElement.etiology : "",
      code: this.selectedElement ? this.selectedElement.code : "",
      name: this.selectedElement ? this.selectedElement.name : "",
      description: this.selectedElement ? this.selectedElement.description : "",
      images: [],
      videos: [],
      links: [],
      files_to_remove: [],
      enabled: this.selectedElement ? this.selectedElement.enabled : true
    }
    if (this.selectedElement) {
      let images = this.selectedElement.files.filter(el => el.type === "image");
      let videos = this.selectedElement.files.filter(el => el.type === "video");
      let links = this.selectedElement.files.filter(el => el.type === "link");
      this.defaultImages = [...images];
      this.defaultVideos = [...videos];
      this.defaultLinks = [...links];
    }
  }

  onClose() {
    this.closingEvent.emit();
  }

  toggleStatus() {
    this.data.enabled = !this.data.enabled;
  }

  onChangeFiles(event, key) {
    this.data[key] =event.target.files;
  }
  onAddLink() {
    this.data.links.push("");
  }
  onRemoveLink(index) {
    this.data.links.splice(index, 1);
  }
  onRemoveFile(id, key) {
    if (key === "image") {
      this.defaultImages = this.defaultImages.filter(el => el.id !== id);
    } else if (key === "video") {
      this.defaultVideos = this.defaultVideos.filter(el => el.id !== id);
    } else if (key === "link") {
      this.defaultLinks = this.defaultLinks.filter(el => el.id !== id);
    }
    this.data.files_to_remove.push(id);
  }
  onChangeLink(event, i) {
    this.data.links[i] = event.target.value;
  }

  assetLink(link) {
    return environment.url + "/storage/" + link;
  }

  getCleanLink(link) {
    return this.sanitizer.bypassSecurityTrustHtml(link);
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
      if (key == "images" || key == "videos" || key == "links" || key == "files_to_remove") {
        if (this.selectedElement || key != "files_to_remove") {
          for (let item of this.data[key]) {
            data.append(key + "[]", item);
          }
        }
      } else {
        if (this.data[key]) data.append(key, this.data[key]);
      }
    }
    console.log(this.data)
    if (this.selectedElement) {
      this.ptisService.update(this.selectedElement.id, data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.ptisService.create(data).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          console.log(error)
          this.onError(error);
        }
      )
    }
  }

  onSuccess(result) {
    console.log(result)
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
    console.log(error)
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
