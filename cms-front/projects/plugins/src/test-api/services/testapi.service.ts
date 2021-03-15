import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Endpoints} from 'app/common/endpoints/endpoints';


@Injectable({providedIn: 'root'})
export class TestApiService {

    constructor(private  http: HttpClient) {
    }

    generateMock(jsoncode) {
        return this.http.post(Endpoints.ENDPOINT_DEPLOY + '/oas', jsoncode, {responseType: 'text'});
    }

    getLog() {
        return this.http.get(Endpoints.ENDPOINT_DEPLOY + '/log',{responseType: 'text'});
    }



}
