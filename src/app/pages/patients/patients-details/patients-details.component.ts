import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.scss']
})
export class PatientsDetailsComponent implements OnInit {
  id;
  isLoading = true;
  patient;
  selectedWound;
  showingForms = {
    edit: false,
    wound: false
  };

  constructor(private patientsService: PatientsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getUpdatedData();
  }

  onClose() {
    for(let key in this.showingForms) {
      this.showingForms[key] = false;
    }
  }

  onOpenForm(key) {
    this.onClose();
    this.showingForms[key] = true;
  }

  getUpdatedData() {
    this.isLoading = true;
    this.patientsService.find(this.id).subscribe(patient => {
      this.isLoading = false;
      this.patient = patient.data;
    });
  }

  getAge() {
    if (!this.patient || !this.patient.birthday || this.patient.birthday.length <= 0) {
      return "";
    }
    const birthMoment = moment(this.patient.birthday);
    const currentMoment = moment();
    let age = currentMoment.diff(birthMoment, 'years');

    if (birthMoment.month() > currentMoment.month() || 
        (birthMoment.month() === currentMoment.month() && birthMoment.date() > currentMoment.date())) {
        age--;
    }

    return age + "ans";
  }

}
