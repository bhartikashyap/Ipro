import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAnalysisPage } from './book-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: BookAnalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAnalysisPageRoutingModule {}
