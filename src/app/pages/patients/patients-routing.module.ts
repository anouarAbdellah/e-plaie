import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

const routes: Routes = [
  {path: '', component: PatientsListComponent},
  {path: 'details/:id', component: PatientsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
