import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsFormComponent } from './consultations-form/consultations-form.component';
import { ConsultationsListComponent } from './consultations-list/consultations-list.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ConsultationsDetailsComponent } from './consultations-details/consultations-details.component';


@NgModule({
  declarations: [
    ConsultationsFormComponent,
    ConsultationsListComponent,
    ConsultationsDetailsComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ConsultationsRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxDropzoneModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [ConsultationsFormComponent, ConsultationsDetailsComponent]
})
export class ConsultationsModule { }
