import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RegisterPageRoutingModule } from "./register-routing.module";

import { RegisterPage } from "./register.page";
import { SearchComponent } from "./search/search.component";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { IonIntlTelInputModule } from "ion-intl-tel-input";
import { IonicSelectableModule } from "@ionic-selectable/angular";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonIntlTelInputModule,
    IonicSelectableModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IonicModule,
    RegisterPageRoutingModule,
  ],
  exports: [SearchComponent],
  declarations: [RegisterPage, SearchComponent],
})
export class RegisterPageModule {}
