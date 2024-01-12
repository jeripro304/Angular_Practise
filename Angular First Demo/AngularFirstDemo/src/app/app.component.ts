import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  // template :`<h1>Hi Hello Welcome to Prodapt</h1>`, //if we not need any external file
  // styles: ['h1{color:red}']
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent  {

  title = 'Jerish';
  dis:boolean=false;

  choice=false;
  bttnName='Show'
  clr='red'

  fruits=['apple','orange','banana','sapota','grapes']

  emp=[{eid:'101',ename:'AAA',sal:'5000',dept:'IT'},
  {eid:'102',ename:'BBB',sal:'4500',dept:'HR'},
  {eid:'103',ename:'CCC',sal:'9000',dept:'IT'},
  {eid:'104',ename:'DDD',sal:'8000',dept:'MGR'}];


  btnclick (userchoice:boolean){
    if (userchoice){
      this.choice=true;
      this.bttnName='Hide'
      this.clr='green';
    }
    else{
      this.choice=false;
      this.bttnName='Show'
      this.clr='red';
    }
  }


  //life cycle hook
  // test:any;

  // constructor(){
  //   console.log("this is from the app component constructor");
  // }

  // ngOnInit(): void {
  //     console.log("this is from the app component ngoninit");
      
  // }
  // ngOnChanges(): void {
  //     console.log('Changes made ');
      
  // }

// inter component communication
  // uname:any;
  // public sendname(changename:string){
  //   this.uname=changename;
  // }
   
// taline='center';
// randomcolor=this.getRandomColor();

// msg='MyValue here'
// myheading='main';

// public getRandomColor(){
//   let letter='0123456789ABCDEF'.split('');
//   var color='#'
//   for (var i=0;i<6;i++){
//     color+=letter [Math.floor(Math.random()*16)]
//   }
//   console.log(color)
  
//   this.randomcolor=color;
//   return color;
// }
// public setcolor(){
//   this.randomcolor=this.getRandomColor();
// }


}