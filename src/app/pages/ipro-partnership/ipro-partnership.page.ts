import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ipro-partnership',
  templateUrl: './ipro-partnership.page.html',
  styleUrls: ['./ipro-partnership.page.scss'],
})
export class IproPartnershipPage implements OnInit {

  
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }

}
