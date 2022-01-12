import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import * as api from '../utility/api';

@Injectable({
  providedIn: 'root',
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
}
