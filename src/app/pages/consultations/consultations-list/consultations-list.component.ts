import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AppointementsService } from 'src/app/shared/services/appointements.service';
import { saveAs } from 'file-saver';

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
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.scss']
})
export class ConsultationsListComponent implements OnInit {
  isShowForm = false;
  showingForms = {
    edit: false,
    add: false,
    consultation_details: false
  };
  selectedElement = null;
  page = 1;
  pagesCount = 1;
  isLoading = true;
  viewDate: Date = new Date();
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
    eventClick: (event) => {
      this.onEventClick(event);
    },
    eventLongPressDelay: 200,
    longPressDelay: 200,
    events: [
    ]
  };
  filters = {};
  consultations: any = [];
  constructor(private appointementsService: AppointementsService) {}

  ngOnInit(): void {
    this.onLoad();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

  }

  onAdd() {
    this.showingForms.add = true;
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

  onFormReload() {
    this.onClose();
    this.onLoad();
  }

  onSelectElement(key, element) {
    this.onClose();
    this.showingForms[key] = true;
    this.selectedElement = element;
  }

  onPageChange(page) {
    console.log(page)
    this.page = page;
    this.onLoad();
  }

  onLoad() {
    this.isLoading = true;
    let filters = this.getFilters();
    console.log(filters)
    this.appointementsService.all_consultations({params: filters}).subscribe(
      (result) => {
        console.log(result)
        this.consultations = result.data;
        this.calendarOptions.events = result.data.map((element: any) => {
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
        this.pagesCount = result.data.last_page;
        this.isLoading = false;
      }, 
      (error) => {
        this.isLoading = false;
      }
    )
  }

  exportData() {
    this.isLoading = true;
    let filters = this.getFilters(true);
    this.appointementsService.all_consultations({params: filters, responseType: 'blob' as 'json'}).subscribe(
      (result) => {
        console.log(result);
        const blob = new Blob([result], { type: 'text/csv' });
        saveAs(blob, 'cabinets.csv');
        this.isLoading = false;
      }, 
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }

  getFilters(shouldExport = false) {
    let filters = {};
    for (let key in this.filters) {
      if (this.filters[key] && this.filters[key] != "")
      filters[key] = this.filters[key]
    }
    if (shouldExport) filters["export"] = true;
    return filters;
  }

  onFiltersChange(filters) {
    this.filters = {...filters};
    this.onLoad();
  }

  onEventClick(event) {
    console.log(event)
    if (event.event.title.includes("Consultation")) {
      this.onClose();
      this.selectedElement = this.consultations.find(el => el.id == event.event.id);
      this.showingForms.consultation_details = true;
    }
  }

}
