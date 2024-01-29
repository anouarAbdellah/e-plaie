import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { MedicinesFormComponent } from './medicines-form/medicines-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    MedicinesListComponent,
    MedicinesFormComponent
  ],
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    MatSnackBarModule
  ]
})
export class MedicinesModule { }
