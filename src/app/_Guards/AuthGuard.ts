import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_Service/alertify.service';
import { AuthService } from '../_Service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authservice:AuthService,private router:Router,public alertify:AlertifyService) {}
  canActivate(next:ActivatedRouteSnapshot):boolean {
    if(this.authservice.loggedIn()){
        return true;
    }
    this.alertify.error("Should be Login first");
    this.router.navigate(['Login']);
    return false;
   
  }
}