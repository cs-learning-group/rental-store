import { Component } from '@angular/core';
interface Products {
  name: string;
  id: string;
  price: number;
  category?: string[];
  details?: string;
  // reviews?: Review[];
  version?: string;
  color?: string;
  quantity: number;
  inStock: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [
    {
      imageSrc: 'assets/img1.jpg',
      imageAlt: 'image1',
    },
    {
      imageSrc: 'assets/img2.jpg',
      imageAlt: 'image2',
    },
    {
      imageSrc: 'assets/img3.jpg',
      imageAlt: 'image3',
    },
  ];
}
