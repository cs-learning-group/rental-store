import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../typings';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export default class CartComponent implements OnInit {
  cartItems: CartProduct[] = [
    // {
    //   image:
    //     'https://m.media-amazon.com/images/I/41txBobui9S._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    //   name: 'Every Day Hero',
    //   price: 10,
    //   quantity: 2,
    //   id: 1,
    // },
    // {
    //   image:
    //     'https://m.media-amazon.com/images/I/41W-o6xu2bL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    //   name: 'Do It Today',
    //   price: 20,
    //   quantity: 1,
    //   id: 2,
    // },
    // {
    //   image:
    //     'https://m.media-amazon.com/images/I/61MeD6FXDTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    //   name: 'Hindu Rashtra',
    //   price: 15,
    //   quantity: 3,
    //   id: 3,
    // },
  ];
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
