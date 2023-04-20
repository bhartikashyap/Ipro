import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommissionOptionPageRoutingModule } from './commission-option-routing.module';
import { CommissionOptionPage } from './commission-option.page';
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
import {ShareComponentModule} from '../../components/share-component-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CommissionOptionPageRoutingModule,
    ShareComponentModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  declarations: [CommissionOptionPage],
  providers:[InAppBrowser]
})
export class CommissionOptionPageModule {}
