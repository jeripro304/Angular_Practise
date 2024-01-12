import { Component } from '@angular/core';
import { Product, category } from '../model/productModel';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  plist:Product;
  cate:any=category;
  productList:any;

  
  constructor(private eser:ProductService){
    this.plist=new Product('','','',0,'',0)
    console.log(this.plist);
  }
  

  datasubmitted(){
    console.log('from the data submitted in add product');
    console.log(this.plist);

    
    this.productList =this.eser.addProducts(this.plist).subscribe((p)=>{this.productList = p});
    // confirm('Product Added Successfully')
    
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
  
}
