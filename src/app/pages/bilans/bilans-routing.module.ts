import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilansListComponent } from './bilans-list/bilans-list.component';

const routes: Routes = [
  {path: '', component: BilansListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilansRoutingModule { }
