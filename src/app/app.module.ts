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
// import { SplashScreen } from '@capacitor/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';
// import { IonicSelectableModule } from '@ionic-selectable/angular';
import { TokenInterceptor } from './services/token-interceptor';
import { IonicSelectableModule } from 'ionic-selectable';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { DatePicker } from '@ionic-native/date-picker/ngx';
import {VideoService} from 'src/app/services/video.service';
 import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

//  import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
 import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { CalendarModule } from 'ion2-calendar';
 import { DocumentViewer ,DocumentViewerOptions} from '@awesome-cordova-plugins/document-viewer/ngx';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { NgCalendarModule  } from 'ionic2-calendar';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { DatePickerModule } from 'ionic-calendar-date-picker';
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
    IonicModule.forRoot(),
    IonicSelectableModule,
    HttpClientModule,
    CalendarModule,
    NgCalendarModule,
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
    // StatusBar,
    // SplashScreen,
    // DatePicker,
    BackgroundMode,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    Globalization,
     ScreenOrientation,
      EmailComposer,
     CallNumber,
     DocumentViewer,
     Badge
    //  InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
