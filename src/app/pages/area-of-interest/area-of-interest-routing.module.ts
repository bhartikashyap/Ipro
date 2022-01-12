import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaOfInterestPage } from './area-of-interest.page';

const routes: Routes = [
  {
    path: '',
    component: AreaOfInterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaOfInterestPageRoutingModule {}
