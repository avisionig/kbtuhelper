import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  email = "";
  password = "";
  logged = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private route: Router, private authService: AuthService) { }
  login(email:string,password:string) {
    if(this.email && this.password)
    this.authService.login(this.email, this.password).subscribe((data)=>{
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.route.navigate(["../home"]);
    });
    this.route.navigate(["../home"]);
    console.log(this.email, this.password);
  }

}
