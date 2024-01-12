import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  prolist:any;

  constructor(public eser:ProductService){
    this.prolist =eser.getProduct().subscribe((p)=>{this.prolist = p})
  }
  

}
