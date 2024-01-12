import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  @Input() product:any;
  @Output() changeEdit = new EventEmitter<boolean>();
  editPrice:any;
  editQty:any;
  

  productForm:FormGroup;
  price:FormControl;
  qty:FormControl;
  pricezero:boolean = false;
  qtyzero:boolean = false;


  constructor(public eser:ProductService){

    this.price = new FormControl('',[Validators.required, Validators.pattern("^[0-9]+")])
    this.qty = new FormControl('',[Validators.required,Validators.pattern("^[0-9]+")])
    this.productForm = new FormGroup({
      price: this.price,
      qty: this.qty
    })
  }
  OnClick(){
    this.eser.editProduct(this.product,this.price.value,this.qty.value).subscribe()
    
    this.changeEdit.emit(false);
  }


  Cancel(){
    this.changeEdit.emit(false);
  }

 
  pricecheck(price:any){
    if(price <= 0){
      this.pricezero = false;
    }
    else{
      this.pricezero = true;
    }

  }
  qtycheck(qty:any){
    if(qty <= 0){
      this.qtyzero = false;
    }
    else{
      this.qtyzero = true;
    }

  }

  
}
