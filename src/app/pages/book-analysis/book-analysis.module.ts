import { NgModule } from "@angular/core";
import { CommonModule,DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { BookAnalysisPageRoutingModule } from "./book-analysis-routing.module";

import { BookAnalysisPage } from "./book-analysis.page";
import { HttpClient } from "@angular/common/http";
import { Globalization } from "@ionic-native/globalization/ngx";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { RegisterPageModule } from "../register/register.module";
import { IonicSelectableModule } from 'ionic-selectable';
import {ShareComponentModule} from '../../components/share-component-module';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicSelectableModule,
    ShareComponentModule,
    NgbModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IonicModule,
    BookAnalysisPageRoutingModule,
    ReactiveFormsModule,
    RegisterPageModule,
    
  ],
  declarations: [BookAnalysisPage],
  providers:[DatePipe,InAppBrowser]
})
export class BookAnalysisPageModule {}
