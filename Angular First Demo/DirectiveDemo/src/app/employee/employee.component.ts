import { Component, Input } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee:any;

  // constructor(){
  //   this.employee=new Employee(101,'ABC',5000,'IT')
  // }
}
