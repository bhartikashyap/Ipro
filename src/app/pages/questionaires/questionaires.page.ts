import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-questionaires',
  templateUrl: './questionaires.page.html',
  styleUrls: ['./questionaires.page.scss'],
})
export class QuestionairesPage implements OnInit {
  agree:any;
  errorText:any='';
  constructor( private router: Router,private utlity:UtilService) { }

  ngOnInit() {
  }
  goForward(){
    this.errorText = '';
    if(this.agree){
      this.router.navigate(["/question"]);
    }
    else{
       this.errorText = this.utlity.translateText('QUESTIONNAIRE').msg;
    }
  }
  // goBack(){
  //   this.router.navigate(["/tabs/area-of-interest"]);
  // }

}
