import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  questions: any = [];
  questionIndex = 0;
  questionAnsIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,
    private utility: UtilService,
    private apiService: ApiService,
    private navController: NavController,
  ) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions = async () => {
    let result: any = await this.apiService.getQuestions();
    this.questions = result.questions ? result.questions : null;
    console.log(result);
  }

  nextQuestion = async () => {
    this.questionIndex += 1;
  }

  goBack() {
    // this.navController.back();
    this.router.navigate(["/area-of-interest"]);
  }
}
