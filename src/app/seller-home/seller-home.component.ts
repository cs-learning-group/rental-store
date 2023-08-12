import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productImage: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form submitted:', this.productForm.value);
      // You can send the form data to an API or perform other actions here
    }
  }
}
