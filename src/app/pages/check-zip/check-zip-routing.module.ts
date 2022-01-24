import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckZipPage } from './check-zip.page';

const routes: Routes = [
  {
    path: '',
    component: CheckZipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckZipPageRoutingModule {}
