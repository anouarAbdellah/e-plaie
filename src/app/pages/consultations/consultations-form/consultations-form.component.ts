import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import html2canvas from 'html2canvas';
import * as moment from 'moment';
import { Utils } from 'src/app/shared/helpers/utils';
import { AntecedentsService } from 'src/app/shared/services/antecedents.service';
import { AppointementsService } from 'src/app/shared/services/appointements.service';
import { BilansService } from 'src/app/shared/services/bilans.service';
import { CanvasesService } from 'src/app/shared/services/canvases.service';
import { MedicinesService } from 'src/app/shared/services/medicines.service';
import { MotifsService } from 'src/app/shared/services/motifs.service';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { environment } from 'src/environments/environment';
import {constants} from "../../../shared/constants";


@Component({
  selector: 'app-consultations-form',
  templateUrl: './consultations-form.component.html',
  styleUrls: ['./consultations-form.component.scss']
})
export class ConsultationsFormComponent implements OnInit {
  url = environment.url;
  title = constants.CONSULTATIONS;
  data: any = {
    patient_id: null,
    doctor_id: null,
    with_wound: null,
    motif_ids: [],
    antecedent_history_id: null,
    diagnosis: null,
    result: null,
    weight: null,
    height: null,
    imc: null,
    bpm: null,
    bp: null,
    date: null,
    payment_title: null,
    payment_price: null,
    payment_description: null,
    document_type: null,
    documents: [],
    existing_documents: [],
    remove_documents: [],
  };
  isLoading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() selectedElement;
  @Input() patient;
  @ViewChild('f') form: NgForm;
  @Output() closingEvent = new EventEmitter();
  @Output() reloadEvent = new EventEmitter();
  steps = [
    {
      key: "step_1",
      name: "Fiche de consultation"
    },
    {
      key: "step_2",
      name: "Constantes vitales"
    },
    {
      key: "step_3",
      name: "Documents médicaux"
    },
    {
      key: "step_4",
      name: "Enregistrer un rendez vous"
    },
    {
      key: "step_5",
      name: "Paiement"
    }
  ];
  active_step = 0;
  patients: any = [];
  doctors: any = [];
  motifs: any = [];
  antecedents: any = [];
  canvases: any = [];
  medicines: any = [];
  bilans: any = [];
  generate_documents: any = [];

  constructor(
    private appointementsService: AppointementsService,
    private usersService: UsersService,
    private canvasesService: CanvasesService,
    private bilansService: BilansService,
    private motifsService: MotifsService,
    private patientsService: PatientsService,
    private medicinesService: MedicinesService,
    private modalService: NgbModal,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    console.log(this.patient)
    this.title = (this.selectedElement ? constants.UPDATE_ELEMENT : constants.CREATE_ELEMENT) + " " + this.title;
    this.patientsService.all({params: {}}).subscribe(
      (result) => {
        console.log(result)
        this.patients = result.data;
      }, 
      (error) => {
      }
    );
    this.canvasesService.all({params: {enabled: 1}}).subscribe(
      (result) => {
        this.canvases = result.data;
      }, 
      (error) => {
      }
    );
    this.bilansService.all({params: {enabled: 1}}).subscribe(
      (result) => {
        this.bilans = result.data;
      }, 
      (error) => {
      }
    );
    this.medicinesService.all({params: {enabled: 1, type: "Plaie"}}).subscribe(
      (result) => {
        console.log(result)
        this.medicines = result.data;
      }, 
      (error) => {
      }
    );
    this.motifsService.all({params: {}}).subscribe(
      (result) => {
        console.log(result)
        this.motifs = result.data;
      }, 
      (error) => {
      }
    );
    this.usersService.all({params: {type: "doctor", enabled: 1}}).subscribe(
      (result) => {
        console.log(result)
        this.doctors = result.data;
      }, 
      (error) => {
      }
    );
    this.data = {
      patient_id: this.selectedElement ? this.selectedElement.patient_id : null,
      doctor_id: this.selectedElement ? this.selectedElement.doctor_id : null,
      with_wound: this.selectedElement ? this.selectedElement.with_wound : null,
      motif_ids: this.selectedElement ? this.selectedElement.motif_ids : [],
      antecedent_history_id: this.selectedElement ? this.selectedElement.antecedent_history_id : null,
      diagnosis: this.selectedElement ? this.selectedElement.diagnosis : null,
      result: this.selectedElement ? this.selectedElement.result : null,
      weight: this.selectedElement ? this.selectedElement.weight : null,
      height: this.selectedElement ? this.selectedElement.height : null,
      imc: this.selectedElement ? this.selectedElement.imc : null,
      bpm: this.selectedElement ? this.selectedElement.bpm : null,
      bp: this.selectedElement ? this.selectedElement.bp : null,
      date: this.selectedElement ? this.selectedElement.date : null,
      payment_title: this.selectedElement ? this.selectedElement.payment_title : null,
      payment_price: this.selectedElement ? this.selectedElement.payment_price : null,
      payment_description: this.selectedElement ? this.selectedElement.payment_description : null,
      document_type: null,
      documents: [],
      existing_documents: this.selectedElement ? this.selectedElement.documents : [],
      remove_documents: [],
    };
    if (this.patient) {
      this.data.patient_id = this.patient.id;
      this.antecedents = this.patient.antecedents;
    }
  }

  onClose() {
    this.closingEvent.emit();
  }

  toggleWithWound() {
    this.data.with_wound = !this.data.with_wound;
  }

  async onSubmit() {
    const controls = Object.values(this.form.controls);
    for(let control of controls) {
      if(control.invalid) {
        return;
      }
    }
    console.log(this.data)
    const dataToSend = Utils.generateFormData(this.data);
    console.log(dataToSend)
    this.isLoading = true;
    if (this.selectedElement) {
      this.appointementsService.update_consultations(this.selectedElement.id, dataToSend).subscribe(
        (result) => {
          this.onSuccess(result);
        },
        (error) => {
          this.onError(error);
        }
      )
    } else {
      this.appointementsService.create_consultations(dataToSend).subscribe(
        (result) => {
          this.onSuccess(result);
          this.router.navigate(["/patients/details", result.data.patient_id]);
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


  getActiveStepName() {
    return this.steps[this.active_step].name;
  }

  changeStep(forward = true) {
    if (forward && this.active_step < this.steps.length - 1) {
      this.active_step++;
    } else if (!forward && this.active_step > 0) {
      this.active_step--;
    }
  }
  onPatientChange(event) {
    this.data.patient_id = event;
    const patient = this.patients.find(element => element.id == event);
    if (patient) {
      this.antecedents = patient.antecedents || [];
    }
  }
  onChangeIMC(event) {
    if (Number(this.data.weight) > 0 && Number(this.data.height) > 0) {
      this.data.imc = ((Number(this.data.weight) / (Math.pow(Number(this.data.height), 2))) * 10000).toFixed(2);
    } else {
      this.data.imc = null;
    }
  }
  getIMCBackground() {
    if (this.data.imc) {
      if (Number(this.data.imc) <= 18.5 || Number(this.data.imc) > 35) {
        return "#ef0b0b";
      }
      if (Number(this.data.imc) > 25 && Number(this.data.imc) <= 35) {
        return "#ef6a0b";
      }
      if (Number(this.data.imc) >= 18.5 && Number(this.data.imc) <= 25) {
        return "#0ed353";
      }
    } else {
      return "#fff";
    }
  }

  onSelectImage(event) {
    console.log(event);
    this.data.images.push(...event.addedFiles);
  }

  onRemoveImage(event) {
    console.log(event);
    this.data.images.splice(this.data.images.indexOf(event), 1);
  }

  removeExistingImage(index) {
    this.data.remove_images.push(this.data.existing_images[index].id);
    this.data.existing_images.splice(index, 1);
  }

  trackByFn(index, item) {
    return item.id;
  }

  addDocument() {
    this.generate_documents.push({
      id: Utils.generateUniqueId(),
      canvas_id: null,
      canvas: null,
      medicines: [],
      bilan_id: null,
      start_date: null,
      end_date: null,
      note: "",
      description: "",
      generating: false
    });
  }
  removePrescription(index) {
    this.generate_documents.splice(index, 1);
  }

  addMedicine(index) {
    this.generate_documents[index].medicines.push({
      id: Utils.generateUniqueId(),
      medicine_id: null,
      medicine: null,
      posologie: null
    });
  }
  removeMedicine(index, medicine) {
    this.generate_documents[index].medicines[medicine].splice(index, 1);
  }

  generateDocument(index) {
    if (!this.generate_documents[index].generating) {
      this.generate_documents[index].canvas = {...this.canvases.find(el => el.id === this.generate_documents[index].canvas_id)};
      if (this.generate_documents[index].canvas) {
        this.generate_documents[index].canvas.head = this.replaceVariables(this.generate_documents[index].canvas.head, this.generate_documents[index]);
        this.generate_documents[index].canvas.body = this.replaceVariables(this.generate_documents[index].canvas.body, this.generate_documents[index]);
        this.generate_documents[index].canvas.footer = this.replaceVariables(this.generate_documents[index].canvas.footer, this.generate_documents[index]);
      }
      for (let medicineKey in this.generate_documents[index].medicines) {
        this.generate_documents[index].medicines[medicineKey].medicine = this.medicines.find(el => el.id === this.generate_documents[index].medicines[medicineKey].medicine_id);
      }
    }
    this.generate_documents[index].generating = !this.generate_documents[index].generating;
  }

  replaceVariables(content, documentToGenerate) {
    const patient = this.patients.find(element => element.id === this.data.patient_id);
    if (content) {
      if (patient) {
        content = content.replace(/{nomPatient}/g, patient.lastname);
        content = content.replace(/{prenomPatient}/g, patient.firstname);
        content = content.replace(/{docteur}/g, patient.doctor?.name);
        content = content.replace(/{clinique}/g, patient.cabinet?.name);
      }
      content = content.replace(/{dateDocument}/g, moment().format("DD-MM-YYYY"));
      if (documentToGenerate.canvas.type === 'Lettre d\'arrête de travail') {
        content = content.replace(/{dureeArret}/g, moment(documentToGenerate.end_date).diff(moment(documentToGenerate.start_date), 'days') + 'j');
        content = content.replace(/{dateRupture}/g, moment(documentToGenerate.end_date).format("DD-MM-YYYY"));
      }
      if (documentToGenerate.canvas.type === 'Certificat médical') {
        content = content.replace(/{dureeCertificat}/g, moment(documentToGenerate.end_date).diff(moment(documentToGenerate.start_date), 'days') + 'j');
      }
    }
    return content;
  }

  confirmGenerateDocument(index) {
    const div = document.getElementById('generate-document-preview') as HTMLElement;

    html2canvas(div).then(canvas => {
      const base64Image = canvas.toDataURL('image/png');
      this.data.documents.push(base64Image);
      this.generate_documents.splice(index, 1);
    });
  }
  onDocumentCanvasChange(event, key) {
    this.generate_documents[key].canvas = event ? this.canvases.find(element => element.id == event) : null;
    this.generate_documents[key].canvas_id = event;
    console.log(this.generate_documents[key].canvas)
  }
  onDocumentBilanChange(event, key) {
    this.generate_documents[key].bilan = event ? this.bilans.find(element => element.id == this.generate_documents[key].event) : null;
    this.generate_documents[key].bilan_id = event;
  }
}
