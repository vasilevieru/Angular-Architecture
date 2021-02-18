import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateProduct, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl: string = '/api/products';

  constructor(private httpClient: HttpClient) { }

  addProduct(product: CreateProduct) : Observable<Product> {
    return this.httpClient.post<Product>(this.productUrl, product);
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }
}
