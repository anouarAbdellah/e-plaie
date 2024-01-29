import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtisListComponent } from './ptis-list/ptis-list.component';

const routes: Routes = [
  {path: '', component: PtisListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtisRoutingModule { }
