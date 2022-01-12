import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteligentTradingPage } from './inteligent-trading.page';

const routes: Routes = [
  {
    path: '',
    component: InteligentTradingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteligentTradingPageRoutingModule {}
