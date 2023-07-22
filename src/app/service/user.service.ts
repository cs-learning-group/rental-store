import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private sendDataToApi: HttpClient) {}
  userData(data: object) {
    return this.sendDataToApi.post('http://localhost:3000/post', data);
  }
}
