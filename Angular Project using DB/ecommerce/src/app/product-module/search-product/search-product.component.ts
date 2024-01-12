import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  constructor( public eser:ProductService){}
  searchText=""
  bol:boolean=false
  pl:any;



  onclick(){
    this.bol=true
    console.log(this.bol)
    this.eser.searchproduct(this.searchText).subscribe((list)=>{this.pl=list});
  }
}
