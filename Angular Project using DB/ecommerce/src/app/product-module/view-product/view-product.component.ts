import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { category } from '../model/productModel';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  productlist:any;
  category:string = 'ALL';
  categorys:string[];
  delete:boolean ;
  deleteI:any;
  editview:boolean=false;
  

  constructor(private eser:ProductService){
    this.edit =  false;
    this.delete = false;
    this.categorys = category;
    // this.productlist[]=this.eser.getProducts().subscribe((p)=>{this.productlist=p});
    this.eser.getProducts().subscribe(
      (pdt) => {
        if (Array.isArray(pdt)) {
          this.productlist = pdt;
        } else {
          this.productlist = []; 
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.productlist = []; 
      }
    );
  }

  deleteId(proid:string){
    console.log(proid);
    this.eser.deleteproduct(proid).subscribe((p)=>{this.productlist=p});
    // this.eser.deleteproduct(id).subscribe(
    //   (response) => {
    //     // Assuming you want to remove the deleted product from the productlist
    //     this.productlist = this.productlist.filter((product:any) => product.id !== id);
    //     console.log('Product deleted successfully');
    //   },
    //   (error) => {
    //     console.error('Error deleting product:', error);
    //   }
    // );
    this.eser.getProducts().subscribe(
      (pdt) => {
        if (Array.isArray(pdt)) {
          this.productlist = pdt;
        } else {
          this.productlist = []; 
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.productlist = []; 
      }
    );
    
  }



  ngOnInit() {
    // this.eser.getProducts().subscribe((products) => {
    //   this.productlist = products;
    
    //   // Extract and store categories in the 'categories' array
    //   this.category = this.productlist.map((product:any) => product.pcategory);
    //   console.log(this.category);
    //   //function to remove the duplicate values in the array
    //   function rempvedup(data:any){
    //     return data.filter((value:any,index:any)=>data.indexOf(value)===index);
    //   }
    //   this.category=rempvedup(this.category);
      
    // });
  }

  
  

  onEdit(Id:any){
    this.edit = true;
    console.log(Id);
    this.editId = Id;
    this.editview=true;
    
    console.log(this.editId);
    
  }
  @Input() edit:boolean;
  editId:any;


  changingEdit(change:boolean){
    this.edit = change;
   
    
    
  }

}


