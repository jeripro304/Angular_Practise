import { Injectable } from '@angular/core';
import { Employee } from '../module/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string='http://localhost:3000'
  employees:Employee[]=[];

  

  constructor(private httpClient:HttpClient) { }

  getEmployees(){
    return this.httpClient.get(this.url);
  }

  getEmployee(eid:number){
    return this.httpClient.get(this.url+'/employee/'+eid);
  }

  addEmployees(emp:Employee){
    return this.httpClient.post(this.url,emp);
  }
}
