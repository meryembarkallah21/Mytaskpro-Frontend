import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Endpoints } from '../../../common/endpoints/endpoints';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    onLeftSidenavViewChanged: Subject<any>;
    onRightSidenavViewChanged: Subject<any>;
    user: any;

   constructor(private readonly http: HttpClient, ) 
   {  
    this.onLeftSidenavViewChanged = new Subject();   
}

    getAll(): Observable<any[]> {
    return this.http.get<any[]>(Endpoints.ENDPOINT_USER);
    }

    login(email: string, password: string): Observable<any> {
    return this.http.post(Endpoints.ENDPOINT_USER + '/login', {email: email, password: password});
    }

    save(user: any): Observable<AnalyserOptions> {
        const headers = {lang : window.navigator.language };
    return this.http.post<any>(Endpoints.ENDPOINT_USER, user, {headers});
    }

    // tslint:disable-next-line:typedef
    confirm(token: string) {
        return this.http.post<any>(Endpoints.ENDPOINT_USER + '/confirm', {token: token});
    }

    update(user: any): Observable<any> {
        return this.http.put<any>(Endpoints.ROOT_API + '/users/update', user);
    }


    findbyCompany(company: string) : Observable<any>  {
        return this.http.get<any>(Endpoints.ROOT_API + '/users/company/'+company);
    }
    
    findbyEmail(email: string) : Observable<any>  {
       return this.http.get<any>(Endpoints.ROOT_API + '/users/email/'+email);
    }

    findbyUsername(username: string) : Observable<any>  {
        return this.http.get<any>(Endpoints.ROOT_API + '/users/findByUsername/'+username);
    }

}
