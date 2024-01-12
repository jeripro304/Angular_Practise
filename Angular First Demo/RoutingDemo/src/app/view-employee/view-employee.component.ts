import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../module/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  employeelist:any;
  employeelist1:any;
  // emp:Employee=new Employee(101,'poornesh',5000,'ADMIN');

  constructor(private eser:EmployeeService){
    this.employeelist=this.eser.getEmployees().subscribe((emp)=>{this.employeelist=emp});
    // eser.addEmployees(this.emp);
    // console.log(this.emp);

    this.eser.getEmployee(101).subscribe((emp)=>{this.employeelist1=emp});

  }
}
