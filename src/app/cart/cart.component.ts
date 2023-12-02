import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../typings';
import { CurrencyPipe } from '@angular/common';
import { retry } from 'rxjs';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { style } from '@angular/animations';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export default class CartComponent implements OnInit {
  cartItems: CartProduct[] = [];
  grandtotal: number = 0;
  practice: any[] = [3, 8, 12, 20, 60, 62, 100, 102, 107];
  obj: object = {
    name: 'John',
    city: 'New York',
    age: 45,
  };
  obj2: object = {
    city: 'New York',
    name: 'John',
    age: 45,
  };

  ngOnInit(): void {
    let value: any = localStorage.getItem('cart');
    value = JSON.parse(value);
    this.cartItems = value;
    if (this.cartItems) {
      let gt: any = document.getElementById('gd');
      gt.style.display = 'block';
    }

    // let objMatch = this.compareObj(this.obj, this.obj2);
    // console.log(objMatch);

    this.sort([5, 2, 35, 40, 1]);
  }

  public compareObj(obj: any, obj2: any): boolean {
    let objKey = Object.keys(obj);
    let obj2Key = Object.keys(obj2);

    const key1 = [];
    const key2 = [];
    for (let item in obj) {
      if (item) {
        key1.push(item);
      }
    }
    for (let item2 in obj2) {
      if (item2) {
        key2.push(item2);
      }
    }

    key1.sort();
    key2.sort();
    console.warn(key1);
    console.error(key2);
    for (let i = 0; i < key1.length; i++) {
      if (key1[i] === key2[i]) {
        console.log('--', key1[i]);
      }
    }

    return true;
  }

  public sort(arr: number[]) {
    /* - sort array of numbers in ascending order */
    // for (let j = 1; j < arr.length; j++) {
    //   for (let i = 1; i < arr.length; i++) {
    //     // debugger;
    //     if (arr[i - 1] > arr[i]) {
    //       let num = arr[i - 1];
    //       arr[i - 1] = arr[i];
    //       arr[i] = num;
    //     }
    //   }
    // }
    // console.log('Sort', arr);
    /* - finding last element of array */
    // for (let i = 0; i < arr.length; i++) {
    //   let last = arr.length - 1;
    //   arr[last + 1];
    //   console.log(arr[last]);
    // }
    /* -reverse the array values  */

    // debugger;
    let last: number = arr.length + 1;
    last = last - 1;
    while (last >= 0) {
      let temp = arr[last];
      arr[last] = arr[temp];
    }
    console.log(arr);
  }

  cartCalculation(productQuantityOfCart: number, productPriceOfCart: any) {
    let subtotal: number = productQuantityOfCart * productPriceOfCart;
    this.grandtotal = this.grandtotal += subtotal;
    return subtotal;
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
