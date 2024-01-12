import { Injectable } from '@angular/core';
import { Product, productList } from './Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  plist: Product[] = [];
  constructor() {
    
   }

   addProduct(product:Product){
    productList.unshift(product)
   }

   getProduct():Product[]{
    return this.plist;
   }

}
