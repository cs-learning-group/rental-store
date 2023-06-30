import { Component, Input, OnInit } from '@angular/core';
interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImages[] = [];
  @Input() indicators = true; //for slider dots,
  @Input() cantrols = true; // for prev and  next btn,
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //default to 2second
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImage();
    }
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  autoSlideImage(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  //set index of imageo on dot/indicators click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
