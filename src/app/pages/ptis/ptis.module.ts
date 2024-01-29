import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtisRoutingModule } from './ptis-routing.module';
import { PtisListComponent } from './ptis-list/ptis-list.component';
import { PtisFormComponent } from './ptis-form/ptis-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CKEditorModule } from 'ckeditor4-angular';


@NgModule({
  declarations: [
    PtisListComponent,
    PtisFormComponent
  ],
  imports: [
    CommonModule,
    PtisRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule,
    CKEditorModule
  ]
})
export class PtisModule { }
