import { Component, OnInit } from '@angular/core';
import { BaseProduct, CartProduct } from '../typings';
import { UserService } from '../service/user.service';
import { ProductService } from '../modules/test/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productDetails?: CartProduct[];
  public cartProduct?: CartProduct[] = [];
  constructor(private testService: ProductService) {}

  ngOnInit(): void {
    this.testService.getProducts().subscribe((res: any[]) => {
      res.map((produt) => (produt.quantity = 0));
      this.productDetails = res;
      // this.productDetails[0].quantity = 0 as any;
      // this.handleQuantity(this.productDetails[0], 'plus');
      // console.log(this.productDetails);
    });
  }

  public handleQuantity(product: CartProduct, val: string): void {
    console.log(product);
    if (
      val === 'plus' &&
      product.quantity != null &&
      product.quantity != undefined &&
      product.quantity < (product.inventoryCount || 0)
    ) {
      console.log('if');
      ++product.quantity;
    } else if (val === 'min' && product.quantity && product.quantity > 1) {
      console.log('else');
      --product.quantity;
    }
    console.log('eof');
  }

  /* 
- is item available in stock  - Done
- is item available in cart   - Done
- if available in cart, increment thier quantity  - Done
- if not available in cart, push item to cart
- product quantity should be sync in cart and product tile
- same product should not be added 
- 
  */

  public addToCart(product: CartProduct): void {
    if (product.inventoryCount != 0) {
      if (this.isItemAvailableInCart(product)) {
        product.quantity + 1;
      } else {
        this.addItemToCart(product);
      }
    } else {
      alert('item is not available please try later');
    }

    // -----------------//

    if (product && product.quantity == 0) {
      product.quantity + 1;
    }
    this.cartProduct?.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    console.log(this.cartProduct);
  }

  private isItemAvailableInCart(product: CartProduct): boolean {
    //return true;
    let cartItems: any = localStorage.getItem('cart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
      return true;
    } else {
      return false;
    }
  }

  private addItemToCart(product: CartProduct) {
    let cartItems: any = localStorage.getItem('cart');
    cartItems = JSON.parse(cartItems);
    cartItems.push(product);
  }
}
