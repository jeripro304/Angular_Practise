import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerof'
})
export class PowerofPipe implements PipeTransform {

  transform(value:any,args:any): unknown {
    if (value==''){
      return value;
    }
    else{
      return value**args
    }
    
  }

}
