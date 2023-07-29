import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { login, signUp } from '../typings';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginFailed = new EventEmitter<boolean>(false);
  constructor(private sendDataToApi: HttpClient, private router: Router) {}
  userData(data: signUp) {
    this.sendDataToApi
      .post('http://localhost:3000/post', data, { observe: 'response' })
      .subscribe((res) => {
        localStorage.setItem('userSignup', JSON.stringify(res));

        if (localStorage.getItem('userSignup')) {
          this.router.navigate(['home']);
        }
      });
  }

  userLogin(data: login) {
    this.sendDataToApi
      .get(
        `http://localhost:3000/post?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((res: any) => {
        if (res && res.body && res.body.length) {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['home']);
          console.warn('login Sucess');
        } else {
          this.loginFailed.emit(true);
          console.warn('login Failed');
        }
      });
  }
}
