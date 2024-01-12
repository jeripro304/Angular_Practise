import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    CreateProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    ProductFilterPipe,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,FormsModule
  ]
})
export class ProductModuleModule { }
