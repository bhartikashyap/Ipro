import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetdicountPage } from './setdicount.page';

const routes: Routes = [
  {
    path: '',
    component: SetdicountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetdicountPageRoutingModule {}
