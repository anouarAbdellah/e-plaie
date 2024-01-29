import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntecedentsListComponent } from './antecedents-list/antecedents-list.component';
import { AntecedentsFormComponent } from './antecedents-form/antecedents-form.component';
import { AntecedentsRoutingModule } from './antecedents-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AntecedentsListComponent,
    AntecedentsFormComponent
  ],
  imports: [
    CommonModule,
    AntecedentsRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule
  ]
})
export class AntecedentsModule { }
