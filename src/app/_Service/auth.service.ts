
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_model/user';
import {BehaviorSubject} from 'rxjs'
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
    jwtHelper = new JwtHelperService();
    baseUrl = environment.ApiUrl;
    constructor(private http:HttpClient,private aletfiy:AlertifyService){

    }

    //register api
    register(user:User){
        return this.http.post(this.baseUrl+"api/register",user)
    }
    //login api
    Login(model:any){
        return this.http.post(this.baseUrl+"api/login",model).pipe(
            map((response:any)=>{
                const user=response;
                if (user) {
                    localStorage.setItem('token',user.authorisation.token);
                }
            })
        );
    }

    loggedIn() {
        try{
            const token = localStorage.getItem('token');
            if(token){
                return true
            }else{
                return null;
            }
            // return !this.jwtHelper.isTokenExpired(token||"");
        }
        catch{
          return false
        }
    }
}