import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('user')) {
          this.menuType = 'loginSucess';
        } else {
          this.menuType = 'userlogout';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.menuType = 'userlogout';
  }
  searchSubmit(val: string) {
    console.log(val);
  }
}
