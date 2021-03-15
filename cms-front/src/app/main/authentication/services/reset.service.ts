import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoints } from "app/common/endpoints/endpoints";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class ResetService {
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };

    ENDPOINT_RESET: string = Endpoints.ROOT_API + "/api/requestResetPassword";
    ENDPOINT_RESETPASS: string = Endpoints.ROOT_API + "/api/resetPassword";

    constructor(private http: HttpClient) {}

    resetpassword(mail: string): Observable<any> {
        return this.http.post<any>(
            this.ENDPOINT_RESET,
            {email: mail},
            this.httpOptions
        );
    }

    changepassword( mail: string,token: string, pass: string): Observable<any> {
        return this.http.post<any>(this.ENDPOINT_RESETPASS, {email: mail, token: token, password: pass});
    }
}
