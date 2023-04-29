import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Validator } from './validator';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required])
    },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: Validator.passwordsMatching }
  )
  email = "";
  username = "";
  firstname = "";
  lastname = "";
  password = "";
  constructor(private authService:AuthService, private route: Router) { }

  register(email: string, username: string, firstName: string, lastName: string, password:string) {
    this.authService.register({email: email, username: username ,firstName: firstName, lastName: lastName, password: password});
    this.route.navigate(['../login']);

  }
}
