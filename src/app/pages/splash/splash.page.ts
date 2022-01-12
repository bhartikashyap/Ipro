import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { session } from 'src/app/utility/message';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private utility: UtilService, private router:Router, private menuCtrl: MenuController) { }

  async ngOnInit() {
    this.menuCtrl.enable(false);
    let sessionRes = await this.utility.getStorage(session.AUTH_STATUS);
    setTimeout(() => {
      if (sessionRes) {
        this.router.navigate(['/area-of-interest']);
      } else {
        this.router.navigate(['/login']);
      }
    }, 4000);
  }

}
