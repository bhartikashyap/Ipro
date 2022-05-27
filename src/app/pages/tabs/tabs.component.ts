import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent implements OnInit {
  dashboard:any=''
  constructor(private menuCtrl: MenuController,private utilSer:UtilService) {
  
    
  }

async ngOnInit() {
    // await this.utilSer.changeMenu();
  }
  ionViewWillEnter() {
    this.dashboard = "/tabs/dashboard/"+this.utilSer.defaultDash;

  }

 
  openMenu(){
    console.log(this.menuCtrl);
    this.menuCtrl.enable(true);
    this.menuCtrl.open('first');
  }
}
