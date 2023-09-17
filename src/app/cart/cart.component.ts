import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../typings';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export default class CartComponent implements OnInit {
  cartItems: CartProduct[] = [];
  ngOnInit(): void {
    let value: any = localStorage.getItem('cart');
    value = JSON.parse(value);
    this.cartItems = value;
  }
  handleQuantity(cart: CartProduct, val: string) {}
  removeToCart(val: number | undefined) {
    localStorage.removeItem('cart');
  }
}
