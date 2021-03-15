import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class TestApiService {

    constructor(private  http: HttpClient) {
    }

    deployOAS(oascode) {
        return this.http.post( 'http://localhost:3000/deploy/oas', oascode) ;
    }


}
