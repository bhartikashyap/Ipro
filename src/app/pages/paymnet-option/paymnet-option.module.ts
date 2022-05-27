import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymnetOptionPageRoutingModule } from './paymnet-option-routing.module';

import { PaymnetOptionPage } from './paymnet-option.page';
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
    PaymnetOptionPageRoutingModule ,
    ShareComponentModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  declarations: [PaymnetOptionPage],
  providers:[InAppBrowser]
})
export class PaymnetOptionPageModule {}
