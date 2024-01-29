import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetsRoutingModule } from './cabinets-routing.module';
import { CabinetsListComponent } from './cabinets-list/cabinets-list.component';
import { CabinetsFormComponent } from './cabinets-form/cabinets-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    CabinetsListComponent,
    CabinetsFormComponent
  ],
  imports: [
    CommonModule,
    CabinetsRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule
  ]
})
export class CabinetsModule { }
