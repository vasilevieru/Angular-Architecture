import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { ProductComponent } from './product.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductGridComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRoutingModule,
    MatIconModule
  ]
})
export class ProductModule { }
