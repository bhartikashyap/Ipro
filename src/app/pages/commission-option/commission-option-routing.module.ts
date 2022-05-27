import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommissionOptionPage } from './commission-option.page';

const routes: Routes = [
  {
    path: '',
    component: CommissionOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommissionOptionPageRoutingModule {}
