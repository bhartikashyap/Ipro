import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizedMicronutritionPage } from './personalized-micronutrition.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizedMicronutritionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizedMicronutritionPageRoutingModule {}
