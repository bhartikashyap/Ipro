import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerAgreementPage } from './partner-agreement.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerAgreementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerAgreementPageRoutingModule {}
