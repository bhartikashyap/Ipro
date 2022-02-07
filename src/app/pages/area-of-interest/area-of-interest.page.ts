import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-area-of-interest',
  templateUrl: './area-of-interest.page.html',
  styleUrls: ['./area-of-interest.page.scss'],
})
export class AreaOfInterestPage implements OnInit {

  constructor(private router:Router,private menu: MenuController) { }

  ngOnInit() {
  }
   

  openMenu(){
    this.menu.enable(true);
    this.menu.open('first');
  }

  openPersonalized(){
     this.router.navigate(['/tabs/personalized-micronutrition'])
  }

   openIntelligent(){
     this.router.navigate(["/tabs/inteligent-trading"]);
  }

   openPartnership(){
     this.router.navigate(["/tabs/ipro-partnership"]);
  }
}
