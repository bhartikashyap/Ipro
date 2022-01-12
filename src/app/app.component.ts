import { Component, OnInit } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  language: string;
  constructor(
    private globalization: Globalization,
    private _translate: TranslateService
  ) {}
  ngOnInit() {
    this.getDeviceLanguage();
  }
  getDeviceLanguage() {
    this.globalization
      .getPreferredLanguage()
      .then((res) => {
        console.log(res);
        this._initTranslate(res.value);
        
      })
      .catch((e) => {
        console.log(e);
         this._initTranslate('en');
      });
  }
  private _initTranslate(language: string) {
    this._translate.setDefaultLang(language);
    if (language) {
      this.language = language;
    } else {
      this.language = 'en';
    }
    console.log(this.language);
    this._translate.use(this.language);
  }
}
