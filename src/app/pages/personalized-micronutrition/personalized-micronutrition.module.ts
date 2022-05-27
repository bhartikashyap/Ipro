import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizedMicronutritionPageRoutingModule } from './personalized-micronutrition-routing.module';

import { PersonalizedMicronutritionPage } from './personalized-micronutrition.page';
import { HttpClient } from '@angular/common/http';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {ShareComponentModule} from '../../components/share-component-module';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareComponentModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    PersonalizedMicronutritionPageRoutingModule,
  ],
  declarations: [PersonalizedMicronutritionPage],
})
export class PersonalizedMicronutritionPageModule {}
