import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotifsListComponent } from './motifs-list/motifs-list.component';

const routes: Routes = [
  {path: '', component: MotifsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotifsRoutingModule { }
