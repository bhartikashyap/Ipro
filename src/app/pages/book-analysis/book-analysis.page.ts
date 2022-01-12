import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-analysis',
  templateUrl: './book-analysis.page.html',
  styleUrls: ['./book-analysis.page.scss'],
})
export class BookAnalysisPage implements OnInit {

   constructor(private router:Router, private navController: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }
  openCart() {
    this.router.navigate(['/cart']);
  }
}
