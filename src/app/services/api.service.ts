import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import * as api from '../utility/api';

@Injectable({
  providedIn: "root",
})
export class ApiService extends EnvironmentService {
  constructor(private http: HttpClient) {
    super();
  }

  async loginUser(body: any = {}) {
    return await this.http.post(this.apiUrl + api.LOGIN_USER, body).toPromise();
  }

  async registerUser(body: any = {}) {
    return await this.http.post(this.apiUrl + api.REGISTER, body).toPromise();
  }

  async getQuestions() {
    return await this.http.get(this.apiUrl + api.GET_QUESTION).toPromise();
  }

  async forgotPassword(body: any = {}) {
    return await this.http
      .post(this.apiUrl + api.FORGOT_PASSWORD, body)
      .toPromise();
  }

  async getCountryList() {
    return await this.http.get(this.apiUrl + api.GET_COUNTRY).toPromise();
  }

  async getProfile() {
    return await this.http.get(this.apiUrl + api.GET_PROFILE).toPromise();
  }

  async checkZip(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CHECK_ZIP, body).toPromise();
  }

  async checkEmail(email: string) {
    let body={email};
    return await this.http.post(this.apiUrl + api.CHECK_EMAIL, body).toPromise();
  }

  async checkTaxId(countryId: number,taxId:string) {
    let body={
      countryId:countryId ? Number(countryId) : null,
      taxId:taxId ? taxId.toString() : null
    };
    return await this.http.post(this.apiUrl + api.CHECK_TAX_ID, body).toPromise();
  }

  async updateProfile(body: any = {}) {
    return await this.http.post(this.apiUrl + api.UPDATE_PROFILE, body).toPromise();
  }

  async getPlanDetail(selected_plan:string) {
    let body={selected_plan}
     return await this.http.post(this.apiUrl + api.GET_PLAN,body).toPromise();
  }

  async createPayment(body: any = {}) {
    return await this.http.post(this.apiUrl + api.CREATE_PAYMENT, body).toPromise();
  }

  async paymentStatus(body:any  = {}) {
    return await this.http.post(this.apiUrl + api.CHECK_PAYMENT_STATUS, body).toPromise();
  }

  async proceedRegistration(body:any  = {}) {
    return await this.http.post(this.apiUrl + api.PROCEED_REGISTRATION, body).toPromise();
  }

  async submitAnswer(body:any  = {}) {
    return await this.http.post(this.apiUrl + api.SUBMIT_ANSWER, body).toPromise();
  }
}
