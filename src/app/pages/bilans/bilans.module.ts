import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilansRoutingModule } from './bilans-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BilansRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule
  ]
})
export class BilansModule { }
