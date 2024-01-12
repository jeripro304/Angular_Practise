import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee/Employee';

@Pipe({
  name: 'deptfilter',
  pure:false
})
export class DeptfilterPipe implements PipeTransform {

  

  transform(employees: Employee[], dept:any){
    if (dept=='all'){
      return employees;
    }
    else{
      return employees.filter((employees)=>employees.dept==dept)
    }
  }

}
