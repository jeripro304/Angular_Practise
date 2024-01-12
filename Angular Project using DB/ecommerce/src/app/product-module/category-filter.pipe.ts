import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  pure:false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(productlist:any, cat:string): any {
    if(cat == 'ALL'){
      return productlist;
    }
    else{
      return productlist.filter((product:any)=>product.pcategory==cat);
    }
  }

}
