import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Validator } from './validator';
import {AuthService} from "../auth.service";
import {RegisterRequest} from "../tokenInterfaces";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required])
    },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: Validator.passwordsMatching }
  )

  constructor(
    private router: Router  ,private authService: AuthService) { }

  register() {

  }
}
