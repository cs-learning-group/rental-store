import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  submitSearch(val: string) {
    this.router.navigate(['/search', val], {
      // queryParams: {
      //   term: val,
      // },
      queryParams: {
        order: 'popular',
        'price-range': 'not-cheap',
      },
    });
    console.log(val);
  }
}
// /search?term=harry+potter
