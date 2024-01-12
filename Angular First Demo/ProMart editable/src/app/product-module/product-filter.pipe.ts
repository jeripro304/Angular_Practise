import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/Product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(prolist:Product[],category:any) :any {
    if (category=='all'){
      return prolist;
    }
    else{
      return prolist.filter((prolist)=>prolist.category==category)
    }
  }

}
