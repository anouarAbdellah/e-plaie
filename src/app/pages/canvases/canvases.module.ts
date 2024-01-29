import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasesRoutingModule } from './canvases-routing.module';
import { CanvasesListComponent } from './canvases-list/canvases-list.component';
import { CanvasesFormComponent } from './canvases-form/canvases-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CKEditorModule } from 'ckeditor4-angular';


@NgModule({
  declarations: [
    CanvasesListComponent,
    CanvasesFormComponent
  ],
  imports: [
    CommonModule,
    CanvasesRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule,
    CKEditorModule
  ]
})
export class CanvasesModule { }
