import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySponsorPage } from './my-sponsor.page';

const routes: Routes = [
  {
    path: '',
    component: MySponsorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySponsorPageRoutingModule {}
