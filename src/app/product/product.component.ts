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

  public buyerKaCart: CartProduct[] = JSON.parse(
    localStorage.getItem('cart') ?? '[]'
  );
  constructor(private testService: ProductService) {}

  ngOnInit(): void {
    this.testService.getProducts().subscribe((res: any[]) => {
      res.map((product) => (product.quantity = 0));
      this.productDetails = res;
    });
  }

  syncQuantity(currentProduct: CartProduct) {
    const buyerCartMeCurrentProductKaIndex = this.buyerKaCart.findIndex(
      (product: CartProduct) => product.name === currentProduct.name
    );
    // this.buyerKaCart[buyerCartMeCurrentProductKaIndex].quantity;

    currentProduct.quantity =
      this.buyerKaCart[buyerCartMeCurrentProductKaIndex]?.quantity;

    return currentProduct.quantity ? currentProduct.quantity : 0;
  }

  /**
   * Increase or Decrease the quantity of a product
   * @param product
   * @param val
   */
  public handleQuantity(product: CartProduct, val: string): void {
    if (
      val === 'plus' &&
      product.quantity != null &&
      product.quantity != undefined &&
      product.quantity < (product.inventoryCount || 0)
    ) {
      this.addToCart(product);
    } else if (val === 'min' && product.quantity && product.quantity > 1) {
      const buyerCartMeCurrentProductKaIndex = this.buyerKaCart.findIndex(
        (items: CartProduct) => items.name === product.name
      );
      this.buyerKaCart[buyerCartMeCurrentProductKaIndex].quantity -= 1;
      product.quantity =
        this.buyerKaCart[buyerCartMeCurrentProductKaIndex].quantity;
      localStorage.setItem('cart', JSON.stringify(this.buyerKaCart));
    }
  }

  /* 
- is item available in stock   - Done
- is item available in cart   - Done
- if available in cart, increment their quantity  - Done
- if not available in cart, push item to cart - Done
- same product should not be added - Done
- product quantity should be sync in cart and product tile  
  */

  /**
   * Adding item to cart
   * @param currentProduct
   */
  public addToCart(currentProduct: CartProduct): void {
    /** Jab user currentProduct ke add to Cart button pe click karega */
    if (currentProduct.inventoryCount != 0) {
      /** Ye block tabhi execute hoga jab currentProduct stock me rahega */
      if (this.isItemAvailableInCart(currentProduct)) {
        /**
         * Ye block tabhi execute hoga jab currentProduct buyer cart array me already available rahega
         * buyerKaCart = [{}]/ [{}, {}]/ [{}, {}, {}, ...{}]; a
         */

        const buyerCartMeCurrentProductKaIndex = this.buyerKaCart.findIndex(
          (product: CartProduct) => product.name === currentProduct.name
        );
        this.buyerKaCart[buyerCartMeCurrentProductKaIndex].quantity += 1;

        currentProduct.quantity =
          this.buyerKaCart[buyerCartMeCurrentProductKaIndex].quantity;
        localStorage.setItem('cart', JSON.stringify(this.buyerKaCart));
      } else {
        currentProduct.quantity = currentProduct.quantity
          ? currentProduct.quantity
          : 1;
        /** Ye block tabhi execute hoga jab currentProduct buyer cart me nahi rahega */
        this.buyerKaCart?.push(currentProduct);

        localStorage.setItem('cart', JSON.stringify(this.buyerKaCart));
      }
    } else {
      /** Ye block tabhi execute hoga jab product stock me nahi rahega */
      alert(
        `${currentProduct.name} is not available in stock, please try later`
      );
    }
  }

  /**
   * Checking the product is available in localstorage
   * @param product
   * @returns
   */
  private isItemAvailableInCart(product: CartProduct): boolean {
    let cartItems: any = localStorage.getItem('cart') ?? '[]';
    cartItems = JSON.parse(cartItems);
    console.log('cartItems:=', typeof cartItems);

    const isItemAvailable: boolean = cartItems.some(
      (item: CartProduct) => item.name === product.name
    );
    return isItemAvailable;
  }
}
