import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymnetOptionPage } from './paymnet-option.page';

const routes: Routes = [
  {
    path: '',
    component: PaymnetOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymnetOptionPageRoutingModule {}
