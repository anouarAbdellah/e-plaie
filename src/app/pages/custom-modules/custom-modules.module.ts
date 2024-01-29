import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModulesRoutingModule } from './custom-modules-routing.module';
import { CustomModulesListComponent } from './custom-modules-list/custom-modules-list.component';
import { CustomModulesFormComponent } from './custom-modules-form/custom-modules-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { CustomModulesElementsFormComponent } from './custom-modules-elements-form/custom-modules-elements-form.component';
import { CustomModulesElementsListComponent } from './custom-modules-elements-list/custom-modules-elements-list.component';


@NgModule({
  declarations: [
    CustomModulesListComponent,
    CustomModulesFormComponent,
    CustomModulesElementsFormComponent,
    CustomModulesElementsListComponent
  ],
  imports: [
    CommonModule,
    CustomModulesRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class CustomModulesModule { }
