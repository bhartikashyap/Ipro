import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inteligent-trading',
  templateUrl: './inteligent-trading.page.html',
  styleUrls: ['./inteligent-trading.page.scss'],
})
export class InteligentTradingPage implements OnInit {

  
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }

}
