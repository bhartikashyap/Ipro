import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  get apiUrl() {
    return environment.baseurl;
  }

  get fileUrl() {
    return environment.fileurl;
  }

  get production() {
    return environment.production;
  }
}
