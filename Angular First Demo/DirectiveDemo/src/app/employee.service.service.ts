import { Injectable } from '@angular/core';
import { Employee } from './employee/Employee';
import { employees } from './employee-list/employeelist';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  employeeList:Employee[];
  constructor() { 
    this.employeeList = employees;
  }

 

  addEmployee(emp:Employee)
  {
    console.log(emp);
    this.employeeList.unshift(emp);
    console.log(this.employeeList);
    
  }

  getEmployees():Employee[]
  {
    return this.employeeList;
  }

 
}
