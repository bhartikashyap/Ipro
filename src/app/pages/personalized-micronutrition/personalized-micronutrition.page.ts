import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personalized-micronutrition',
  templateUrl: './personalized-micronutrition.page.html',
  styleUrls: ['./personalized-micronutrition.page.scss'],
})
export class PersonalizedMicronutritionPage implements OnInit {

  constructor(private router:Router, private navController: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }

  openBookingAnalysis(){
    this.router.navigate(['/book-analysis'])
  }
}
