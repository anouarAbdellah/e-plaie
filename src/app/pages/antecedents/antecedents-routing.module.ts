import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntecedentsListComponent } from './antecedents-list/antecedents-list.component';

const routes: Routes = [
  {path: '', component: AntecedentsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntecedentsRoutingModule { }
