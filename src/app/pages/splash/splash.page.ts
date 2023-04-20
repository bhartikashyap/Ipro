import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { session } from 'src/app/utility/message';
import { AnimationController } from "@ionic/angular"
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private animationCtrl: AnimationController,private utility: UtilService, private router:Router, private menuCtrl: MenuController) { }

  async ngOnInit() {
  //   const squareC = this.animationCtrl.create()
  // .addElement(this.squareC.nativeElement)
  // .duration(5000)
  // .keyframes([
  //   { offset: 0, transform: 'scale(1))', opacity: '0.5' },
  //   { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
  //   { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  // ]);
    this.menuCtrl.enable(false);
    //let sessionRes = await this.utility.getStorage(session.AUTH_STATUS);
    // setTimeout(() => {
    //   if (sessionRes) {
    //     this.router.navigate(["/tabs/area-of-interest"]);
    //   } else {
    //     this.router.navigate(['/login']);
    //   }
    // }, 1000);
  }

}
