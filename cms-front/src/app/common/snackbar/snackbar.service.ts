import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError as observableThrowError } from "rxjs";
import { Endpoints } from "../endpoints/endpoints";
import { catchError, map } from "rxjs/operators";
import { CrudEnum } from "../enum/crudEnum";
import { SnackbarComponent } from "./snackbar.component";
import { MatSnackBar } from "@angular/material";

@Injectable({ providedIn: "root" })
export class SnackBarService {
    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(message: string, panelClass: string) {
        const data = {};
        data["message"] = message;
        data["class"] = panelClass;
        data["snackType"] = panelClass;
        this._snackBar.openFromComponent(SnackbarComponent, {
            data: data,
            panelClass: panelClass,
            duration: 400000,
        });
    }
}
