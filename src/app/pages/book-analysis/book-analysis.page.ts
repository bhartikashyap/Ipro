import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { message } from 'src/app/utility/message';
import { pattern } from 'src/app/utility/pattern';

@Component({
  selector: 'app-book-analysis',
  templateUrl: './book-analysis.page.html',
  styleUrls: ['./book-analysis.page.scss'],
})
export class BookAnalysisPage implements OnInit {
form: FormGroup;
get formControl(){
  return this.form.controls;
}
submitted:boolean=false;
validationMessage:any;
  constructor(
    private router:Router,
     private navController: NavController,
     private fb:FormBuilder
     ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form=this.fb.group({
      email:['',[Validators.required,Validators.pattern(pattern.email)]],
      mobile:['',[Validators.required,Validators.pattern(pattern.phoneNumber)]],
      dob:['',[Validators.required]],
      stritName:['',[Validators.required,Validators.maxLength(500)]],
      houseNumber:['',[Validators.required,Validators.maxLength(50)]],
      additionalAddress:['',[Validators.required,Validators.maxLength(1000)]],
      zip:['',[Validators.required,Validators.pattern(pattern.numeric),Validators.maxLength(10)]],
      city:['',[Validators.required,Validators.maxLength(100)]],
    })

    this.validationMessage = {
      email: [
        { type: 'required', message: message.required },
        { type: 'pattern', message: message.email }
      ],
      mobile: [
        { type: 'required', message: message.required },
        { type: 'pattern', message: message.phoneNumber }
      ],
      dob: [
        { type: 'required', message: message.required }
      ],
      stritName: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(500) },
      ],
       houseNumber: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(50) },
      ],
      additionalAddress: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(1000) },
      ],
      zip: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(10) },
        { type: 'pattern', message: message.numeric }
      ],
       city: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(100) },
      ]
    };
  }

  goBack(){
    this.navController.back();
  }

  openCart() {
    
  }

  reset(){
    this.form.reset();
  }

  submit(){
    this.submitted=true;
    if(this.form.valid){
      this.submitted=false;
      this.router.navigate(['/cart']);
    }
  }
}
