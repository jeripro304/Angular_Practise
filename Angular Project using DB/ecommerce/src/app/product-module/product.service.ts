import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './model/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string='http://localhost:8383'
  constructor(public httpclient:HttpClient) {

   }

   getProducts(){
    return this.httpclient.get(this.url+'/view');
   }

   addProducts(plist:any){

    console.log("in service method");
    console.log(plist);
    return this.httpclient.post(this.url+"/add",plist);
   }

   deleteproduct(proid:any){
    console.log('in product service');
    
    console.log(proid);
    
    return  this.httpclient.delete(`${this.url+'/delete'}/${proid}`);
   }

   pro:Product=new Product('','','',0,'',0);
   editProduct(product:any,price:any,qty:any,){
    console.log(product.pid,price,qty);
    this.pro.pid=product.pid;
    this.pro.pname=product.pname;
    this.pro.pcategory=product.pcategory
    this.pro.pdesc=product.pdesc
    this.pro.price=price
    this.pro.pqty=qty

    return this.httpclient.put(this.url+'/edit',this.pro);
    
   }


   searchproduct(name:any){
    console.log(name);
    return this.httpclient.get(`${this.url+'/view'}/${name}`);
    
   }
}
