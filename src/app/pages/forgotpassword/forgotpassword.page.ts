import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { message } from 'src/app/utility/message';
import { pattern } from 'src/app/utility/pattern';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
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
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  initForm() {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(pattern.email),
          Validators.maxLength(100),
        ],
      ] 
    });

    this.validationMessage = {
      email: [
        { type: 'required', message: message.required },
        { type: 'pattern', message: message.email },
        { type: 'maxlength', message: message.maxLength(100) },
      ]
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
      let params: any = this.form.getRawValue();
      let loading = await this.utility.presentLoading();
      this.apiService
        .forgotPassword(params)
        .then((res: any) => {
          loading.dismiss();
          if (res.status) {
            
            this.utility.presentToast(res.msg);
            this.form.reset();
          } else {
            this.utility.presentToast(res.msg);
          }
        })
        .catch((err: any) => {
          loading.dismiss();
          console.log(err);
        });
      console.log(params);
    }
  }
}
