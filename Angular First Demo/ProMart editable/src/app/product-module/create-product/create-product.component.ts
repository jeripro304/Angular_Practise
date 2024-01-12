import { Component } from '@angular/core';
import { Product, categ } from '../Model/Product';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  plist:Product;

  
  constructor(private eser:ProductServiceService){
    this.plist=new Product('','','','','','')
  }

  dataSubmitted(){
    console.log(this.plist);
    
    this.eser.addProduct(this.plist)
    
  }

  hasError:boolean=false;
  validate(date:string){
    if (date ==='default'){
      this.hasError=true
    }
    else{
      this.hasError=false
    }
  }
  cate:any=categ;
}

