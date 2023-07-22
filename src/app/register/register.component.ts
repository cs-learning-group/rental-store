import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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

  constructor(private udata: UserService) {}

  usersignup(data: object) {
    this.udata.userData(data).subscribe((res) => {
      console.log(res);
    });
  }
}
