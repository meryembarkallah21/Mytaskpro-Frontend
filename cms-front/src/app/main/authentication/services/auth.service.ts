import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Endpoints } from "../../../common/endpoints/endpoints";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";
import { paths } from 'app/common/paths/app-paths';
import { Router } from '@angular/router';

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  

    
    constructor(private http: HttpClient, private snackBar: MatSnackBar ,private _router: Router) {
       
    }
    ENDPOINT_LOGIN: string = Endpoints.ENDPOINT_AUTH + "/login";
    ENDPOINT_REGISTER: string = Endpoints.ENDPOINT_AUTH + "/register";
    ENDPOINT_RESET: string = Endpoints.ROOT_API + "/api/requestResetPassword";
    ENDPOINT_RESETPASS: string = Endpoints.ROOT_API + "/api/resetPassword";

    login(userCredentialsDto: any) {
      return this.http.post(this.ENDPOINT_LOGIN, userCredentialsDto);
    }

    register(userCredentialsDto: any){
        return this.http.post(this.ENDPOINT_REGISTER, userCredentialsDto);
    }

    logout() {
       
    }
    resetPasswordRequest(email: string){
      return this.http.post(this.ENDPOINT_RESET, {email: email});
    }

    resetPassword( mail: string,token: string, pass: string): Observable<any> {
      return this.http.post<any>(this.ENDPOINT_RESETPASS, {email: mail, token: token, password: pass});
    }

}
