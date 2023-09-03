import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseProduct } from 'src/app/typings';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cart: BaseProduct[] = [];
  constructor(private httpClient: HttpClient) {}
  public getProducts(): Observable<BaseProduct[]> {
    return this.httpClient.get<BaseProduct[]>('http://localhost:3000/products');
  }

  public saveProduct(userDetail: BaseProduct): Observable<any> {
    return this.httpClient.post('http://localhost:3000/products', userDetail);
  }
}
