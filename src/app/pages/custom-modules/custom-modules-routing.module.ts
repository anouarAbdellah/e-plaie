import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomModulesElementsListComponent } from './custom-modules-elements-list/custom-modules-elements-list.component';
import { CustomModulesListComponent } from './custom-modules-list/custom-modules-list.component';

const routes: Routes = [
  {path: '', component: CustomModulesListComponent},
  {path: 'elements/:id', component: CustomModulesElementsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomModulesRoutingModule { }
