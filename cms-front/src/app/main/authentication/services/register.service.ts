import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class RegisterService {
    constructor() {}
    private confirm;

    // tslint:disable-next-line:typedef
    saveUser(
        firstname: string,
        lastname: string,
        email: string,
        password: string,
    ): Observable<any> {
       return null
    }

    // tslint:disable-next-line:typedef
    confirmAccount(token: string) {
        return null
    }
}
