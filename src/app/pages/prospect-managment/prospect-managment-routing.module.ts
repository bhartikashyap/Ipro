import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectManagmentPage } from './prospect-managment.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectManagmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectManagmentPageRoutingModule {}
