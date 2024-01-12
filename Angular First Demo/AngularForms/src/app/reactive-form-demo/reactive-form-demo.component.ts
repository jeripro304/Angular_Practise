import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent {

  myname:FormControl;

  empform:FormGroup;

  eid:FormControl;

  constructor(){
    this.myname=new FormControl()


    this.eid=new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^[E].[0-9]+")]);
    this.empform=new FormGroup({
      eid:this.eid,
      ename:new FormControl(),
      dept:new FormControl(),
      salary:new FormControl()
    })

    console.log(this.empform);
    
  }

  

  department:any[]=['Training','IT','HR','Developer']
}
