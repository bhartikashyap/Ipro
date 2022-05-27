import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { message, session } from "src/app/utility/message";
import { pattern } from "src/app/utility/pattern";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
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
  type = "password";
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  initForm() {
    this.form = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
         // Validators.pattern(pattern.email),
          Validators.maxLength(100),
        ],
      ],
      password: ["", [Validators.required, Validators.maxLength(100)]],
    });
    let messages = this.utility.translateText('MSG')
    this.validationMessage = {
      email: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.email },
        { type: "maxlength", message: message.maxLength(100 ,messages.maxLength,messages.characters) },
      ],
      password: [
        { type: "required", message: messages.required },
        { type: "pattern", message: messages.password },
        { type: "maxlength", message: message.maxLength(100 ,messages.maxLength,messages.characters) },
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
  async login() {
    this.submitted = true;
    if (this.form.valid && this.utility.checkNetwork()) {
      this.submitted = false;
      let params: any = this.form.getRawValue();
      params['notificationToken'] = this.utility.FCMToken;
      console.log(params)
      let loading = await this.utility.presentLoading();
      this.apiService
        .loginUser(params) 
        .then((res: any) => {
          loading.dismiss();
          if (res.status == 1) {
            let token = res.jwt;
            let data = res.data;
            this.utility.setStorage(session.AUTH_STATUS, 1);
            this.utility.setStorage(session.AUTH_TOKEN, token);
            this.utility.setStorage(session.AUTH_USER, JSON.stringify(data));
            this.utility.userRole=data.userRole;
            this.utility.setStorage('userRole',data.userRole);
            this.utility.setStorage('firstLogin', new Date());
            if(data.userRole == 'Prospect'){
                   this.utility.checkQuestionaire();
             // this.utility.goNext(["/tabs/area-of-interest"]);
             // this.router.navigate(["/tabs/area-of-interest"]);
            }
            else{
              let dash;
              if(data.defaultDashboard == 'Partner'){
                dash = 'Partner';
              }
              else{
                dash = 'Member';
              }
              this.utility.setStorage('CHANGE_DASH',dash);
              this.utility.goNext(["/tabs/dashboard/"+dash])
            }
          } else {
            this.utility.presentToast(res.msg,"bottom");
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
