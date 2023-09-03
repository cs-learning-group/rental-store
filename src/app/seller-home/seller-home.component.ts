import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../modules/test/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private testService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      details: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      inventoryCount: [0, Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const payload = this.productForm.value;
      payload.quantity = 0;
      console.log('Form submitted:', this.productForm.value);
      this.router.navigate(['home']);
      this.testService.saveProduct(payload).subscribe((res) => {
        console.log(res);
      });
      // You can send the form data to an API or perform other actions here
    }
  }
}
