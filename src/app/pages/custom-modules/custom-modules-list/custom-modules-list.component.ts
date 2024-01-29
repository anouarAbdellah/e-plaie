import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomModulesService } from 'src/app/shared/services/custom-modules.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-custom-modules-list',
  templateUrl: './custom-modules-list.component.html',
  styleUrls: ['./custom-modules-list.component.scss']
})
export class CustomModulesListComponent implements OnInit {

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
      key: "name",
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
    type: "",
    code: "",
    name: "",
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
      name: "name",
      title: "Nom",
      value: ""
    }
  ];

  constructor(private customModulesService: CustomModulesService, private translate: TranslateService) { }

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

  toggleStatusChange(data) {
    console.log(data.status, data.id)
    
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
    this.customModulesService.all({params: filters}).subscribe(
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
    this.customModulesService.all({params: filters, responseType: 'blob' as 'json'}).subscribe(
      (result) => {
        console.log(result);
        const blob = new Blob([result], { type: 'text/csv' });
        saveAs(blob, 'medicines.csv');
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
    if (shouldExport) filters["export"] = true;
    return filters;
  }

  onFiltersChange(filters) {
    this.filters = {...filters};
    this.onLoad();
  }
}
