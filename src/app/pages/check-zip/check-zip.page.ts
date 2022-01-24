import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { message } from 'src/app/utility/message'; 

@Component({
  selector: 'app-check-zip',
  templateUrl: './check-zip.page.html',
  styleUrls: ['./check-zip.page.scss'],
})
export class CheckZipPage implements OnInit {

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }
  submitted = false;
  validationMessage: any;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,
    private utility: UtilService,
    private navController: NavController,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {} 
  ionViewDidEnter() {
    
    this.menuCtrl.enable(false);
   
  }
  initForm() {
    this.form = this.formBuilder.group({
      zip: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
        ],
      ], 
    });

    this.validationMessage = {
      zip: [
        { type: 'required', message: message.required },
        { type: 'maxlength', message: message.maxLength(100) },
      ], 
    };
  }
  ngOnInit() {
     this.initForm();
    this.menuCtrl.enable(false);
  } 

  async submit() {
     this.submitted = true;
    if (this.form.valid && this.utility.checkNetwork()) {
      this.submitted = false;
     
    } 
  }
 
  goBack(){
    this.navController.back();
  } 
}
