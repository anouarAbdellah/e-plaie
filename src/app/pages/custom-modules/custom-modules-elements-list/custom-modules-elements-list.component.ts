import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CustomModulesService } from 'src/app/shared/services/custom-modules.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-custom-modules-elements-list',
  templateUrl: './custom-modules-elements-list.component.html',
  styleUrls: ['./custom-modules-elements-list.component.scss']
})
export class CustomModulesElementsListComponent implements OnInit {


  data = [];
  isShowForm = false;
  selectedElement = null;
  page = 1;
  pagesCount = 1;
  isLoading = true;
  tableData = [];
  custom_module = null;

  filters = {
    id: ""
  };
  filtersElements = [
    {
      type: "number",
      name: "id",
      title: "ID",
      value: ""
    }
  ];

  constructor(private route: ActivatedRoute, private customModulesService: CustomModulesService, private translate: TranslateService) { }


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
    let filters = this.getFilters();
    console.log(filters)
    this.route.paramMap.subscribe(
      (params) => {
        this.isLoading = true;
        this.customModulesService.find(params.get('id')).subscribe(
          (element) => {
            this.custom_module = element.data;
            this.tableData = [
              {
                header: "Id",
                key: "id",
                type: "text"
              }
            ];
            for (let field of this.custom_module.fields) {
              if (field.show_in_list) {
                this.tableData.push({
                  header: field.name.charAt(0).toUpperCase() + field.name.slice(1),
                  key: 'field' + field.id,
                  type: "text"
                });
              }
            }
            for (let step of this.custom_module.steps) {
              for (let field of step.fields) {
                if (field.show_in_list) {
                  this.tableData.push({
                    header: field.name.charAt(0).toUpperCase() + field.name.slice(1),
                    key: 'step_field' + field.id,
                    type: "text"
                  });
                }
              }
            }

            this.tableData.push(...[{
              header: "Date de création",
              key: "created_at",
              type: "date"
            },
            {
              header: "Date de modification",
              key: "updated_at",
              type: "date"
            }])
            this.customModulesService.all_elements(params.get('id'), {params: filters}).subscribe(
              (result) => {
                this.data = result.data.data.map(
                  (data_element) => {
                    let data_structed = [];
                    for (let data_value of data_element.values) {
                      data_structed['field' + data_value.field.id] = data_value.value;
                    }
                    for (let data_value of data_element.step_values) {
                      data_structed['step_field' + data_value.module_step_field_id] = data_value.value;
                    }
                    return {
                      id: data_element.id,
                      ...data_structed,
                      created_at: data_element.created_at,
                      updated_at: data_element.updated_at
                    };
                  }
                );
                this.pagesCount = result.data.last_page;
                this.isLoading = false;
              }, 
              (error) => {
                this.isLoading = false;
              }
            )
          }
        )
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
