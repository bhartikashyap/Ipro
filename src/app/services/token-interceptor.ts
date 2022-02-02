import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { UtilService } from './util.service';
import { Storage } from "@capacitor/storage";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authenticationService: UtilService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = this.authenticationService.getToken(); 
      console.log(token);
        if (token) {
            const cloned = request.clone({
              headers: request.headers.set(
                "Authorization",
                "auth_token " + token
              ),
            });
            return next.handle(cloned);
        } 
        return next.handle(request);
    }

}
