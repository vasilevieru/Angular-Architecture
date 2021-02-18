import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductComponent } from './product.component';



const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
