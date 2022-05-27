import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { QuestionPage } from './question.page';
import { QuestionPageRoutingModule } from './question-routing.module';
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
    ShareComponentModule,
    QuestionPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule
  ],
  declarations: [QuestionPage]
})
export class QuestionPageModule {}
