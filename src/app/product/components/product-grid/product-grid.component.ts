import { Component, OnInit } from '@angular/core';

import { Product } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(res => {
      this.products = res;
    });
  }

}
