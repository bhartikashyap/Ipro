import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IproPartnershipPage } from './ipro-partnership.page';

const routes: Routes = [
  {
    path: '',
    component: IproPartnershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IproPartnershipPageRoutingModule {}
