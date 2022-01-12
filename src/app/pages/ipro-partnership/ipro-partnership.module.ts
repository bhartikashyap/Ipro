import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IproPartnershipPageRoutingModule } from './ipro-partnership-routing.module';

import { IproPartnershipPage } from './ipro-partnership.page';
import { HttpClient } from '@angular/common/http';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IproPartnershipPageRoutingModule,
  ],
  declarations: [IproPartnershipPage],
})
export class IproPartnershipPageModule {}
