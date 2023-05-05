import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit{
  email = "";
  password = "";
  logged = false;
  ngOnInit(){
    if(localStorage.getItem('access')){
      this.route.navigate(['../home']);
    }
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private route: Router, private authService: AuthService) { }
  login() {
    if(this.email && this.password)
    this.authService.login(this.email, this.password).subscribe((data)=>{
      console.log(data)
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      // localStorage.setItem('refresh', data.refresh);
      this.route.navigate(["../home"]);
    });
    console.log(this.email, this.password);
  }
}
