import { Component, OnInit } from '@angular/core';
import { BaseProduct, CartProduct } from '../typings';
import { UserService } from '../service/user.service';
import { TestService } from '../modules/test/services/test.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productDetails?: CartProduct[];

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getUsers().subscribe((res) => {
      this.productDetails = res;
    });
  }

  public handleQuantity(product: CartProduct, val: string): void {
    if (
      product.quantity &&
      product.quantity < (product.inventoryCount || 0) - 1 &&
      val === 'plus'
    ) {
      ++product.quantity;
    } else if (product.quantity && product.quantity > 1 && val === 'min') {
      --product.quantity;
    }
  }

  public addToCart(val: CartProduct): void {
    val.quantity = 1;
    console.warn(val);
  }
}
