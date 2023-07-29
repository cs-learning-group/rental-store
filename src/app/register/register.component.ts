import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { signUp } from '../typings';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private udata: UserService) {}
  register = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    repass: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  usersignup(data: signUp) {
    this.udata.userData(data);
    console.warn(data);
  }
}
