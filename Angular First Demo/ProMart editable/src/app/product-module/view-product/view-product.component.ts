import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product, categ, productList } from '../Model/Product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  categ:any=categ;
  choice:any="all" 
  prolist:Product[];
  
  deleteId(pid:any){
    console.log(pid);

   
    const index = this.prolist.findIndex(item => item.id === pid);

  if (index !== -1) {
    this.prolist.splice(index, 1);
  }
  }

  edit:boolean=false;
  editid(pid:any){
    this.edit=true;
  }
  

  constructor(private eser:ProductServiceService){
    this.prolist=productList;

  }
}
