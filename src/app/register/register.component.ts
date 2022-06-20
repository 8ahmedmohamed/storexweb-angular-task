import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../_model/movies';
import { User } from '../_model/user';
import { AlertifyService } from '../_Service/alertify.service';
import { AuthService } from '../_Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  constructor(private fb: FormBuilder,public authService:AuthService,private router:Router,private aletfiy:AlertifyService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      console.log(this.registerForm.value);
      this.authService.register(this.user).subscribe(
        () => { this.aletfiy.success("Register Sucess") },
        error => { this.aletfiy.error("Register Faild") },
        () => {
          // this.authService.Login(this.user).subscribe(
          //   () => {
              this.router.navigate(['/Login']);
          //   }
          // )
        }
      )
    }

  }
}
