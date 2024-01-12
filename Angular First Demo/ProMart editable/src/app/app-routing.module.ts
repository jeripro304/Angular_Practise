import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-module/product/product.component';
import { CustomerComponent } from './customer-module/customer/customer.component';

const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
