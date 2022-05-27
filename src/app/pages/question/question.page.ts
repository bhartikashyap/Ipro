import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController, NavController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { UserModalPage } from "src/app/components/user-modal/user-modal.page";

@Component({
  selector: "app-question",
  templateUrl: "./question.page.html",
  styleUrls: ["./question.page.scss"],
})
export class QuestionPage implements OnInit {
  gender: any
  questions: any = [];
  questionIndex = 0;
  checkboxAnswer = [];
  lastnameMessage:any='';
  firstnameMessage:any=''
  questionComplete: any ;
  questionAnsIndex = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  formData: any = {
    questionId: null,
    answer: null,
  };
  errorMessage: string = "";
  submitStatus: boolean = false;
  checkboxIndex: any;
  firstname:any;
  lastname:any;
  username:any={};
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,
    private utility: UtilService,
    private apiService: ApiService,
    private navController: NavController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.getQuestions();
    this.username['firstname'] = JSON.parse( await this.utility.getStorage('AUTH_USER')).firstName;
    this.username['lastname'] = JSON.parse( await this.utility.getStorage('AUTH_USER')).lastName;

  }

  getQuestions = async () => {
    let result: any = await this.apiService.getQuestions();
    this.questions = result.questions ? result.questions : null;
    this.questions.map((item) => {
      item['answer'] = '';
    })
    // console.log(result);
  };

  selectCheckbox(id, item, index) {
    if (index != this.checkboxIndex) {
      this.checkboxAnswer = [];
    }
    // this.checkboxAnswer = this.formData.answer
    const checkbox = document.getElementById(
      'checkbox' + id,
    ) as HTMLInputElement | null;
    if (checkbox?.checked) {
      if (this.checkboxAnswer.indexOf(item.value) == -1) {
        this.checkboxAnswer.push(item.value);
      }
    } else {
      let index: number = this.checkboxAnswer.indexOf(item.value);
      this.checkboxAnswer.splice(index, 1);
    }
    console.log(this.checkboxAnswer)
    this.formData.answer = this.checkboxAnswer;
    this.checkboxIndex = index;

  }

  nextQuestion = async (selectedQuest, direction) => {
    this.errorMessage = "";
    // if(this.questions[this.questionIndex-1]['answer']  != ''){
    //   this.formData.answer  = this.questions[this.questionIndex]['answer'] ;

    // }
    if( this.questionIndex >= 51 && direction == 'next'){
      this.checkDigitalSign(direction);
      return false;

    }
   
   
    if (direction == 'next') {
     
  
      if (selectedQuest.mandatory == 'y') {
        if (this.questionIndex == 0) {
          this.gender = this.formData.answer;
        }
        if (!this.formData.answer || this.formData.answer.length <= 0) {
          this.errorMessage = this.utility.translateText('QUESTIONNAIRE').noAns;
          return false;
        }
      }
      else {
        //this.questionIndex += 1;
        this.errorMessage = '';
      }
      if (this.questions[this.questionIndex].possibleAnswers === 'float' || this.questions[this.questionIndex].possibleAnswers === 'int' || this.questions[this.questionIndex].possibleAnswers === 'text') {
        if (this.formData.answer == null) {
          this.formData.answer = ''
        }
      }
      else {

      }
      if ((this.formData.answer == null || this.formData.answer == '') && this.questions[this.questionIndex].possibleAnswers === 'multiple') {
        this.formData.answer = [];
      }
      this.questions[this.questionIndex]['answer'] = this.formData.answer
      console.log(this.questions);

      let question = this.questions[this.questionIndex];
      if (question) {
        this.formData.questionId = question.questionId
          ? question.questionId
          : null;
      }
      let params: any = Object.assign({}, this.formData);
       this.submitAnswer(params);
    }
    else {
      if( this.questionComplete){
        this.questionIndex -= 1;
        this.questionComplete =false;
        this.questions[this.questionIndex]['answer'] = this.formData.answer;
        return false;
      }
      this.questions[this.questionIndex]['answer'] = this.formData.answer;
      if (this.gender == 'Male' && this.questionIndex == 40) {
        this.questionIndex -= 5;
      }
      else {
        this.questionIndex -= 1;

      }
      if (this.questions[this.questionIndex].possibleAnswers === 'multiple') {
        this.checkboxAnswer = this.questions[this.questionIndex]['answer']
      }
      this.formData.answer = this.questions[this.questionIndex]['answer'];

    }
  };

  resetForm() {
    this.formData = {
      questionId: null,
      answer: null,
    };
    // this.checkboxAnswer = [];
    this.errorMessage = "";
    this.submitStatus = false;
  }


  async submitAnswer(params) {
   
    if (this.questionIndex < this.questions.length - 1) {
      this.questionComplete = false;
      let result: any = await this.apiService.submitAnswer(params);
      if (result.status == 1) {
        this.resetForm();

        if (this.gender == 'Male' && this.questionIndex == 35) {
          this.questionIndex += 5;
        }
        else {
          this.questionIndex += 1;  
        }
        this.formData.answer = this.questions[this.questionIndex]['answer'];
        if (this.questionIndex == this.questions.length - 1) {
          this.submitStatus = true;
        }

      }
    } else {
      this.questionComplete = true;
      console.log( this.questionIndex)
       this.questionIndex += 1;
     
    }
  }


  async checkDigitalSign(direction){
    this.lastnameMessage='';
    this.firstnameMessage ='';
    let error=0;
    if(direction == 'next'){
      if(this.lastname == undefined || this.lastname == ''){
        this.firstnameMessage =  this.utility.translateText('QUESTIONNAIRE').completeSign;
        error = 1;
      }
      if(this.firstname == undefined || this.firstname == ''){
        this.firstnameMessage =  this.utility.translateText('QUESTIONNAIRE').completeSign;
        error = 1;
      }
  
  
      if(this.firstname.toLowerCase() != this.username.firstname.toLowerCase()){
        this.firstnameMessage =  this.utility.translateText('QUESTIONNAIRE').firstNameError;
        error = 1;
      }
      if(this.lastname.toLowerCase() != this.username.lastname.toLowerCase()){
        this.lastnameMessage =  this.utility.translateText('QUESTIONNAIRE').lastNameError;
        error = 1;
        
      }

    
      if(!error){
        // this.questionIndex -= 1;
        let params: any = Object.assign({}, this.formData);
        let result: any = await this.apiService.submitAnswer(params);
        if (result.status == 1) {
          this.utility.presentToast( this.utility.translateText('QUESTIONNAIRE').ansSubmitted, "top");
          this.utility.quetionaireComplete = true;
          this.utility.openPopup(UserModalPage, 'question-complete', 'modal-question', true);
        }
        
      }
    }
    
    

  }

  // goBack() {
  //   this.router.navigate(["/tabs/questionare"]);
  // }
}
