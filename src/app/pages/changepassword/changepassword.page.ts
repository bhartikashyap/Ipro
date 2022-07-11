import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { message, session } from "src/app/utility/message";
import { pattern } from "src/app/utility/pattern";
import { ConfirmedValidator } from 'src/app/utility/validator';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }
  submitted = false;
  validationMessage: any;
  type:any="password";
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private _translate: TranslateService,
    private utility: UtilService,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  initForm() {
    this.form = this.formBuilder.group({
    
      oldpassword: ["", [Validators.required, Validators.maxLength(100)]],
      newpassword: ["", [Validators.required, Validators.maxLength(100)]],
      confirmpassword: ["", [Validators.required, Validators.maxLength(100)]
    ]
    },{ 
      validator: ConfirmedValidator('newpassword', 'confirmpassword')
    }
    );

   
    let messages = this.utility.translateText('MSG')
    this.validationMessage = {
    
      oldpassword: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.password },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
      newpassword: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.password },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
      confirmpassword: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.password },
        { type: "maxlength", message: message.maxLength(100,messages.maxLength,messages.characters) },
      ],
    };
  }
  ngOnInit() {
    this.initForm();
    this.menuCtrl.enable(false);
  }

  changeType() {
    if (this.type == "password") {
      this.type = "text";
    } else {
      this.type = "password";
    }
  }
  signup() {
    this.router.navigate(["/register"]);
  }
  async changePassword() {
    this.submitted = true;
    console.log(this.form);
    if (this.form.valid) {
      this.submitted = false;
      let params: any = {
        "currentPassword" :this.form.getRawValue().oldpassword,
        "newPassword":this.form.getRawValue().newpassword
      }
     // this.form.getRawValue();
      console.log(params);
      
      let loading = await this.utility.presentLoading();
      this.apiService
          .changePassword(params)
          .then((res: any) => {
          loading.dismiss();
          if (res.status == 1) {
            // let token = res.jwt;
            // let data = res.data;
            this.utility.presentToast(this.utility.translateText('MSG').passwordChanged,"top");
            // this.utility.presentToast(res.msg,"top");
            this.form.reset();
            // this.utility.setStorage(session.AUTH_STATUS, 1);
            // this.utility.setStorage(session.AUTH_TOKEN, token);
            // this.utility.setStorage(session.AUTH_USER, JSON.stringify(data));
            this.router.navigate(["/tabs/area-of-interest"]);
          } else {
            this.utility.presentToast(this.utility.translateText('MSG').someissueInNetwork,"bottom");
          }
        })
        .catch((err: any) => {
          console.log(err);
          loading.dismiss();
        });
      console.log(params);
    }
  }

}
