import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerAgreementPageRoutingModule } from './partner-agreement-routing.module';

import { PartnerAgreementPage } from './partner-agreement.page';

import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
import {ShareComponentModule} from '../../components/share-component-module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerAgreementPageRoutingModule,
    ShareComponentModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  declarations: [PartnerAgreementPage]
})
export class PartnerAgreementPageModule {}
