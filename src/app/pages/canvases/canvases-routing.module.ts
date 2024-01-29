import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasesListComponent } from './canvases-list/canvases-list.component';

const routes: Routes = [
  {path: '', component: CanvasesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanvasesRoutingModule { }
