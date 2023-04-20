import { NgModule,ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ShareComponentModule} from './components/share-component-module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TokenInterceptor } from './services/token-interceptor';
import { IonicSelectableModule } from 'ionic-selectable';
import {VideoService} from 'src/app/services/video.service';
 import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
 import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
 import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
 import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Market } from '@ionic-native/market/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent           
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicSelectableModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
        
      },
    }),
    AppRoutingModule,
    ShareComponentModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    Globalization,
     ScreenOrientation,
      EmailComposer,
     CallNumber,
     Market,
    InAppBrowser,
    AppVersion
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
