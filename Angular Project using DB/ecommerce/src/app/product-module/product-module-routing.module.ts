import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path:'viewProduct',
    component:ViewProductComponent
  },
  {
    path:'search',
    component:SearchProductComponent
  },
  {
    path:'Create',
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
