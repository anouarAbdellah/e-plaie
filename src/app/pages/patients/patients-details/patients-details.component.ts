import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import * as moment from 'moment';
import { wound_coloration_codes, wounds_zones_classes } from 'src/app/shared/constants';
import { PatientsService } from 'src/app/shared/services/patients.service';
import dayGridPlugin from '@fullcalendar/daygrid';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#028c00',
    secondary: '#036701'
  }
};

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.scss']
})
export class PatientsDetailsComponent implements OnInit {
  id;
  isLoading = true;
  patient;
  showingForms = {
    edit: false,
    wound: false,
    ptsi: false,
    ptsi_list: false,
    consultation: false,
    consultation_details: false,
    bilans_form: false,
    antecedents_form: false,
    prescriptions_form: false
  };
  selected_items = {
    wound: null,
    ptsi: null,
    consultation: null
  };
  show_ptsi = false;
  wound_coloration_codes = wound_coloration_codes;
  wounds_zones_classes = wounds_zones_classes;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    locale: "fr",
    buttonText: {
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      list: 'Liste'
    },
    selectable: true,
    eventLongPressDelay: 200,
    eventClick: (event) => {
      this.onEventClick(event);
    },
    longPressDelay: 200,
    events: [
    ]
  };
  selectedTabIndex = 0;

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

  onAddPtsi(wound_id) {
    this.onClose();
    this.selected_items.wound = this.patient.wounds.find(el => el.id === wound_id);
    this.showingForms["ptsi"] = true;
  }

  onEditPtsi(id, wound_id) {
    this.onClose();
    this.selected_items.wound = this.patient.wounds.find(el => el.id === wound_id);
    this.selected_items.ptsi = this.selected_items.wound?.ptsis.find(el => el.id === id);
    this.showingForms["ptsi"] = true;
  }

  onEditWound(id) {
    this.onClose();
    this.selected_items.wound = this.patient.wounds.find(el => el.id === id);
    this.showingForms["wound"] = true;
  }

  onShowPtsiList(wound, id) {
    this.onClose();
    this.selected_items.ptsi = wound.ptsis.find(el => el.id === id);
    this.showingForms["ptsi_list"] = true;
  }

  onShowPtsi(id) {
    this.show_ptsi = !!id;
    this.selected_items.wound = id ? this.patient.wounds.find(el => el.id === id) : null;
  }

  getUpdatedData() {
    this.isLoading = true;
    this.patientsService.find(this.id).subscribe(patient => {
      this.isLoading = false;
      this.patient = patient.data;
      const consultations_events = this.patient.consultations.map((element: any) => {
        return {
          id: element.id,
          title: 'Consultation',
          start: element.date,
          end: element.date,
          backgroundColor: colors.green.primary,
          borderColor: colors.green.secondary,
          textColor: '#fff',
          editable: false
        };
      });
      const appointements_events = this.patient.appointements.map((element: any) => {
        const color = this.getAppointementColor(element);
        return {
          id: element.id,
          title: 'Rendez-vous',
          start: element.date,
          end: element.date,
          backgroundColor: color.primary,
          borderColor: color.secondary,
          textColor: '#fff',
          editable: false
        };
      });
      this.calendarOptions.events = [
        ...consultations_events,
        ...appointements_events
      ];
    });
  }

  getAppointementColor(appointement) {
    if (appointement.status === "passée") {
      return colors.blue;
    } else if (moment().isBefore(moment(appointement.date))) {
      return colors.green;
    } else {
      return colors.red;
    }
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

  generateLinearGradient(wound) {
    const colorsArray = wound?.ptsis && wound.ptsis.length > 0 && wound.ptsis[wound.ptsis.length - 1].colors.length > 0 ? wound.ptsis[wound.ptsis.length - 1].colors : [];
    if (!Array.isArray(colorsArray) || colorsArray.length === 0) {
      return 'red';
    }
    colorsArray.sort((a, b) => a.percentage - b.percentage);
  
    let gradientString = "linear-gradient(to right, ";
    colorsArray.forEach((color, index) => {
      gradientString += `${wound_coloration_codes[color.color]} ${color.percentage}%`;
      if (index !== colorsArray.length - 1) {
        gradientString += ", ";
      }
    });
    gradientString += ")";
  
    return gradientString;
  }

  downloadFile(prescription) {
    const mimeType = this.extractMimeType(prescription.file);
    // Remove the data URI prefix if present
    const base64WithoutPrefix = prescription.file.split(',')[1];
    
    // Decode the base64 string
    const byteCharacters = atob(base64WithoutPrefix);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = this.getFileNameWithExtension('Ordonnance', mimeType); // Set the file name here
    document.body.appendChild(a);
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  private extractMimeType(base64Data: string): string {
    const mimePrefix = base64Data.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,/);
    if (mimePrefix && mimePrefix.length > 1) {
      return mimePrefix[1];
    }
    return 'application/octet-stream'; // Default to octet-stream if MIME type not found
  }

  private getFileNameWithExtension(fileName: string, mimeType: string): string {
    // Get file extension from MIME type
    const extension = this.getFileExtensionFromMimeType(mimeType);
    return `${fileName}.${extension}`;
  }

  private getFileExtensionFromMimeType(mimeType: string): string {
    // Example function to get file extension from MIME type
    switch (mimeType) {
      case 'application/pdf':
        return 'pdf';
      case 'image/jpeg':
        return 'jpg';
      case 'image/png':
        return 'png';
      case 'application/msword':
        return 'doc';
      // Add more cases for other MIME types as needed
      default:
        return 'file';
    }
  }

  onTabChanged(tabChangeEvent) {
    this.selectedTabIndex = tabChangeEvent.index;
  }

  getPassedAppointements() {
    if (this.patient && this.patient.appointements.length > 0) {
      return this.patient.appointements.filter(element => element.status === "passée").length;
    }
    return 0;
  }

  getMissedAppointements() {
    if (this.patient && this.patient.appointements.length > 0) {
      return this.patient.appointements.filter(element => element.status === "en attente" && moment(element.date).isBefore(moment())).length;
    }
    return 0;
  }

  onEventClick(event) {
    console.log(event)
    if (event.event.title.includes("Consultation")) {
      this.onClose();
      this.selected_items.consultation = this.patient.consultations.find(el => el.id == event.event.id);
      this.showingForms.consultation_details = true;
    }
  }

}
