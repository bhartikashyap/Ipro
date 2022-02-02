import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  checkboxAnswer = [];
  questionAnsIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  formData:any={
    questionId:null,
    answer:null
  };
  errorMessage:string='';
  submitStatus:boolean=false;

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,
    private utility: UtilService,
    private apiService: ApiService,
    private navController: NavController,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions = async () => {
    let result: any = await this.apiService.getQuestions();
    this.questions = result.questions ? result.questions : null;
    // console.log(result);
  }

  selectCheckbox(event, item){ 
    if(event) {
       if(this.checkboxAnswer.indexOf(item.value) ==  -1) {
        this.checkboxAnswer.push(item.value)
       }
    }else {
      let index:number = this.checkboxAnswer.indexOf(item.value);
      this.checkboxAnswer.splice(index,1);
    }
    this.formData.answer=this.checkboxAnswer;
  }

  nextQuestion = async () => {
    this.errorMessage='';
    if(!this.formData.answer){
      this.errorMessage='This field is required';
      return false;
    }
    let question = this.questions[this.questionIndex];
    if(question){
      this.formData.questionId=question.questionId ? question.questionId : null;
    }
    let params:any=Object.assign({},this.formData);
    let result:any=await this.apiService.submitAnswer(params);
    if(result.status == 1){
      this.resetForm();
      if(this.questionIndex < this.questions.length-1){
        this.questionIndex += 1;
        if(this.questionIndex == (this.questions.length - 1)) {
          this.submitStatus=true;
        }
      }else{
        this.goBack();
      }
    }
  }

  resetForm(){
    this.formData={
        questionId:null,
        answer:null
      }
      this.checkboxAnswer=[];
      this.errorMessage='';
      this.submitStatus=false;
  }

  goBack() {
    this.router.navigate(["/area-of-interest"]);
  }
}
