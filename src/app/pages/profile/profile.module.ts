import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";


import { HttpClient } from "@angular/common/http";
import { Globalization } from "@ionic-native/globalization/ngx";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { RegisterPageModule } from "../register/register.module";
import { IonicSelectableModule } from 'ionic-selectable';
import { ShareComponentModule } from '../../components/share-component-module';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    ShareComponentModule,
    ProfilePageRoutingModule,

    NgbModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IonicModule,
    ReactiveFormsModule,
    RegisterPageModule,

  ],
  declarations: [ProfilePage],
  providers: [DatePipe, InAppBrowser]
})
export class ProfilePageModule { }
