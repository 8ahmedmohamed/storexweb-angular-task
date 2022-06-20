import { Component } from '@angular/core';
import { AuthService } from './_Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  constructor(public authService:AuthService){

  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  Logout(){
    localStorage.removeItem('token');
  }
}
