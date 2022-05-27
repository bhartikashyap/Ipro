import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemProsDetailPage } from './mem-pros-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MemProsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemProsDetailPageRoutingModule {}
