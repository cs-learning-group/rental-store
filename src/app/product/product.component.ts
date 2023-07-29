import { Component } from '@angular/core';
import { Product } from '../typings';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productQuantity: number = 1;
  productDetail: Product[] = [
    {
      image:
        'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113fce8f-beb6-468d-a0c3-94020d6f09f5/image-optimization-cover-twist-opt.png',
      name: 'Classroom of the Elite: Year 2',
      price: 399,
      details:
        ' practical guide to help readers overcome negative thought patterns and live a more fulfilling life.',
      category: 'Books',
      quantity: this.productQuantity,
    },
    {
      image:
        'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113fce8f-beb6-468d-a0c3-94020d6f09f5/image-optimization-cover-twist-opt.png',
      name: 'Harry Potter Spellbook:',
      price: 199,
      details:
        ' practical guide to help readers overcome negative thought patterns and live a more fulfilling life.',
      category: 'Books',
      quantity: this.productQuantity,
    },
    {
      image:
        'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113fce8f-beb6-468d-a0c3-94020d6f09f5/image-optimization-cover-twist-opt.png',
      name: 'Dont Believe',
      price: 199,
      details:
        ' practical guide to help readers overcome negative thought patterns and live a more fulfilling life.',
      category: 'Books',
      quantity: this.productQuantity,
    },
    {
      image:
        'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113fce8f-beb6-468d-a0c3-94020d6f09f5/image-optimization-cover-twist-opt.png',
      name: 'Gray Anatomy Outer Edition',
      price: 499,
      details:
        ' practical guide to help readers overcome negative thought patterns and live a more fulfilling life.',
      category: 'Books',
      quantity: this.productQuantity,
    },
  ];

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity = this.productQuantity + 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity = this.productQuantity - 1;
    }
  }

  addToCart(val: any) {
    console.warn(val);
  }
}
