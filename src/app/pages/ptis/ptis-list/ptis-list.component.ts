import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PtisService } from 'src/app/shared/services/ptis.service';
import { saveAs } from 'file-saver';
import { ptis_etiologies } from 'src/app/shared/constants';

@Component({
  selector: 'app-ptis-list',
  templateUrl: './ptis-list.component.html',
  styleUrls: ['./ptis-list.component.scss']
})
export class PtisListComponent implements OnInit {
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
      header: "Code",
      key: "code",
      type: "text"
    },
    {
      header: "Etiologie",
      key: "etiology",
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
    },
    {
      header: "Status",
      key: "enabled",
      type: "status"
    }
  ];
  filters = {
    etiology: "",
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
      name: "code",
      title: "Code",
      value: ""
    },
    {
      type: "text",
      name: "name",
      title: "Nom",
      value: ""
    },
    {
      type: "select",
      name: "etiology",
      title: "Etiologie",
      value: "",
      elements: ptis_etiologies
    },
    {
      type: "status",
      name: "enabled",
      title: "Activé",
      value: ""
    }
  ];

  constructor(private ptisService: PtisService, private translate: TranslateService) { }

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
    this.isLoading = true;
    this.ptisService.status(data.id, {enabled: data.status}).subscribe(
      (result) => {
        let key = this.data.findIndex(el => el.id === data.id);
        if (key >= 0) this.data[key].enabled = result.data.enabled;
        this.isLoading = false;
      }
    );
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
    this.ptisService.all({params: filters}).subscribe(
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
    this.ptisService.all({params: filters, responseType: 'blob' as 'json'}).subscribe(
      (result) => {
        console.log(result);
        const blob = new Blob([result], { type: 'text/csv' });
        saveAs(blob, 'pti.csv');
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
