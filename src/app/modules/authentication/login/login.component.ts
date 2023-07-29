import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { login } from 'src/app/typings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showLoginFailed: string = '';
  constructor(private user: UserService) {}
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
  });

  userlogin(val: login) {
    this.user.userLogin(val);
    this.user.loginFailed.subscribe((error) => {
      this.showLoginFailed = '❌ Your Enter a Valid Email Or Password';
    });
  }
}
