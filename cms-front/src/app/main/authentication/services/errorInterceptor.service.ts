import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthenticationService } from "./auth.service";
import { MatSnackBar } from "@angular/material";
import { SnackBarService } from "app/common/snackbar/snackbar.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private _snackBar: MatSnackBar,
        private snackBarService: SnackBarService
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err) => {
                console.log(
                    "intercepting this error ================> ",
                    err.error.error
                );
                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    this.authenticationService.logout();
                    //       location.reload(true);
                }

                const error = err.error.error.message || err.statusText;

                console.log(
                    "err.error.message || err.statusText ================> ",
                    error
                );
                this.snackBarService.openSnackBar(error, "error");
                return throwError(error);
            })
        );
    }
}
