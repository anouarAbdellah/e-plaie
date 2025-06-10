import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsFormComponent } from './patients-form/patients-form.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
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
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { WoundsFormComponent } from './wounds-form/wounds-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { PtsiFormComponent } from './ptsi-form/ptsi-form.component';
import { PtsiListComponent } from './ptsi-list/ptsi-list.component';
import { ConsultationsModule } from '../consultations/consultations.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PatientBilansFormComponent } from './patient-bilans-form/patient-bilans-form.component';
import { PatientAntecedentsFormComponent } from './patient-antecedents-form/patient-antecedents-form.component';
import { PatientPrescriptionsFormComponent } from './patient-prescriptions-form/patient-prescriptions-form.component';


@NgModule({
  declarations: [
    PatientsFormComponent,
    PatientsListComponent,
    PatientsDetailsComponent,
    WoundsFormComponent,
    PtsiFormComponent,
    PtsiListComponent,
    PatientBilansFormComponent,
    PatientAntecedentsFormComponent,
    PatientPrescriptionsFormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ConsultationsModule,
    FullCalendarModule,
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
    MatTabsModule
  ]
})
export class PatientsModule { }
