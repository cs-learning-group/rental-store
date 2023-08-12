import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const route: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (r) => r.AuthenticationModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search/search.module').then((x) => x.SearchModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
