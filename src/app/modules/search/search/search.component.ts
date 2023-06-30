import { Component } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private route: ActivatedRoute) {
    const qval: any = route.params.subscribe(console.log);
    console.log(qval);

    // route.queryParams.subscribe(console.log);
    // console.log(route.params);
    // console.log(route.queryParams);
  }
}
