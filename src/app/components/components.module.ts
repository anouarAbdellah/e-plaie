import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { PaginationLinksComponent } from './pagination-links/pagination-links.component';
import { BaseTableComponent } from './base-table/base-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { BaseFilterComponent } from './base-filter/base-filter.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { BaseFormComponent } from './base-form/base-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    MatProgressSpinnerModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BaseModalComponent,
    PaginationLinksComponent,
    BaseTableComponent,
    BaseFilterComponent,
    BaseFormComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BaseModalComponent,
    PaginationLinksComponent,
    BaseTableComponent,
    BaseFilterComponent,
    BaseFormComponent
  ]
})
export class ComponentsModule { }
