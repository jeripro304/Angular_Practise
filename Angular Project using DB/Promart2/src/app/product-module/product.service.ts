import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string='http://localhost:3000'
  constructor(private httpClient:HttpClient) {

  }
  getProduct(){
    return this.httpClient.get(this.url);
  }



   


}
