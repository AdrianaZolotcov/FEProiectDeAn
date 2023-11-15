import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {LoginService} from "../shared/login.service";
import {Router} from "@angular/router";
import {Gender} from "./shared/interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});
  public signUpForm: FormGroup = new FormGroup({});
  public showLoginForm: boolean = true;
  public genderOptions: Gender[] = [
    { gender: 'Male' },
    { gender: 'Female' },
  ];

  constructor(
    private readonly loginSrvc: LoginService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.populateLoginForm();
    this.populateSignUpForm();
  }

  private populateLoginForm(): void {
    this.loginForm = new FormGroup({
      nameControl: new FormControl('', Validators.required),
      surnameControl: new FormControl('', Validators.required),
      groupControl: new FormControl('', Validators.required),
    })
  }

  private populateSignUpForm(): void {
    this.signUpForm = new FormGroup({
      loginControl: new FormControl('', Validators.required),
      passwordControl: new FormControl('', Validators.required),
      genderControl: new FormControl(),
      ageControl: new FormControl(),
      confirmTermsAndConditionsControl: new FormControl('', Validators.required)
    })
  }

  public showSignUpForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }

  public signIn(): void {
    const { nameControl, surnameControl ,groupControl,  } = this.loginForm.controls;

    if (nameControl.value && surnameControl.value && groupControl.value) {
      this.loginSrvc.signIn(nameControl.value , surnameControl.value, groupControl.value).subscribe(res => {
        if (res) {
          localStorage.setItem('userData', JSON.stringify(res));
          this.router.navigate(['dashboard'])
        }
      })
    }
  }

}
