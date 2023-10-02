import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../typings';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export default class CartComponent implements OnInit {
  cartItems: CartProduct[] = [];
  // grandTotal: any = 0;
  ngOnInit(): void {
    let value: any = localStorage.getItem('cart');
    value = JSON.parse(value);
    this.cartItems = value;
  }

  public handleQuantity(product: CartProduct, val: string): void {
    if (
      val === 'plus' &&
      product.quantity != null &&
      product.quantity != undefined &&
      product.quantity < (product.inventoryCount || 0)
    ) {
      ++product.quantity;
    } else if (val === 'min' && product.quantity && product.quantity > 1) {
      --product.quantity;
    }
  }

  removeToCart(val: number | undefined) {
    localStorage.removeItem('cart');
  }
}
