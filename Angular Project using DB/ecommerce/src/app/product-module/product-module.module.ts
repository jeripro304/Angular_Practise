import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryFilterPipe } from './category-filter.pipe';
import { SearchProductComponent } from './search-product/search-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ViewProductComponent,
    CategoryFilterPipe,
    SearchProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ]
})
export class ProductModuleModule { }
