import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotifsListComponent } from './motifs-list/motifs-list.component';
import { MotifsFormComponent } from './motifs-form/motifs-form.component';
import { MotifsRoutingModule } from './motifs-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    MotifsListComponent,
    MotifsFormComponent
  ],
  imports: [
    CommonModule,
    MotifsRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule
  ]
})
export class MotifsModule { }
