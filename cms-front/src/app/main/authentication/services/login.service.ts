import { Injectable, EventEmitter, Output } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  @Output() getNavigation: EventEmitter<any> = new EventEmitter();



  constructor(private userService: UserService, private http: HttpClient, private snackBar: MatSnackBar) {}

  login(email: string, password: string): Observable<any>{
    this.userService.findbyEmail(email).subscribe(result=>{
      this.getNavigation.emit(result[0].roleId);
    })
     
    return this.userService.login(email, password);
      
  }
  


  
  
}
