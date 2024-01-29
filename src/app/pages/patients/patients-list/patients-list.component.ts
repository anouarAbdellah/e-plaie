import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { saveAs } from 'file-saver';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  data = [];
  isShowForm = false;
  selectedElement = null;
  page = 1;
  pagesCount = 1;
  isLoading = true;
  tableData = [
    {
      header: "Id",
      key: "id",
      type: "text"
    },
    {
      header: "Nom",
      key: "lastname",
      type: "text"
    },
    {
      header: "Prenom",
      key: "firstname",
      type: "text"
    },
    {
      header: "Telephone",
      key: "phone_number",
      type: "text"
    },
    {
      header: "Date de création",
      key: "created_at",
      type: "date"
    },
    {
      header: "Date de modification",
      key: "updated_at",
      type: "date"
    }
  ];
  filters = {
    firstname: "",
    lastname: "",
    phone_number: "",
    id: ""
  };
  filtersElements = [
    {
      type: "number",
      name: "id",
      title: "ID",
      value: ""
    },
    {
      type: "text",
      name: "firstname",
      title: "Prenom",
      value: ""
    },
    {
      type: "text",
      name: "lastname",
      title: "Nom",
      value: ""
    },
    {
      type: "text",
      name: "phone_number",
      title: "Telephone",
      value: ""
    }
  ];

  constructor(private patientsService: PatientsService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onAdd() {
    this.isShowForm = true;
  }

  onClose() {
    this.isShowForm = false;
    this.selectedElement = false;
  }

  onFormReload() {
    this.onClose();
    this.onLoad();
  }

  onEdit(element) {
    this.isShowForm = true;
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
    this.patientsService.all({params: filters}).subscribe(
      (result) => {
        console.log(result)
        this.data = result.data.data;
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
    this.patientsService.all({params: filters, responseType: 'blob' as 'json'}).subscribe(
      (result) => {
        console.log(result);
        const blob = new Blob([result], { type: 'text/csv' });
        saveAs(blob, 'motifs.csv');
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
    filters["page"] = this.page;
    filters["limit"] = 15;
    if (shouldExport) filters["export"] = true;
    return filters;
  }

  onFiltersChange(filters) {
    this.filters = {...filters};
    this.onLoad();
  }

}
