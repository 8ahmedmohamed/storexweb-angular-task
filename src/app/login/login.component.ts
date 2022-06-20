import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_Service/alertify.service';
import { AuthService } from '../_Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={};
  constructor(public authService:AuthService,private router:Router,private alertify:AlertifyService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.Login(this.model).subscribe(
      next => { this.alertify.success("Sucessfully logged in"); },
      error => { this.alertify.error("Error to logged in") },
      () => { this.router.navigate(['/Movies']); }
    )
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  register(){
    this.router.navigate(['/Register']);
  }
}
