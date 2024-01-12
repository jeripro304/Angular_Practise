import { Component } from '@angular/core';
import { Employee } from '../employee/Employee';
import { department, employees } from './employeelist';
import { EmployeeServiceService } from '../employee.service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  
})
export class EmployeeListComponent {
 employees:Employee;
 emplist:Employee[]=employees;


 depart:string[]=department;

  constructor(private eservice:EmployeeServiceService){
    this.employees=new Employee('','','','')
    this.depart=department
    this.emplist=this.eservice.getEmployees();
  }

  hasError:boolean = false;
  validate(data:string)
  {
    if(data === 'default') 
      this.hasError=true
      else
      this.hasError=false
  }


  dataSubmited()
  {
    console.log(this.employees);
    this.eservice.addEmployee(this.employees);
  }

  

  addEmp(){
    
    employees.push(new Employee(106,'FFF',6780,'MGR'))
  }
  depts=['IT','HR','MGR']
  dept='all'
 
}

