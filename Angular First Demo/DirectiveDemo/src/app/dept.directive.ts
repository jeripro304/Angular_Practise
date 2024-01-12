import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDept]'
})
export class DeptDirective implements OnInit {

  @Input() dept:any;

  @HostBinding('class') setcolor:any;

  constructor(private el:ElementRef,private render:Renderer2) {
    // this.render.setStyle(this.el.nativeElement,'background-color','green')
   }
  ngOnInit(): void {
    if (this.dept=='IT'){
      // this.render.setStyle(this.el.nativeElement,'background-color','green')
      this.setcolor='it'
    }
    else if(this.dept=='MGR'){
      // this.render.setStyle(this.el.nativeElement,'background-color','tomato')
      this.setcolor='mgr'
    }
    else if (this.dept=='HR'){
      // this.render.setStyle(this.el.nativeElement,'background-color','blue')
      this.setcolor='hr'
    }
  }

  @HostListener('mouseover')
    mouseover(){
      this.render.setStyle(this.el.nativeElement,'opacity','0.5')
    }
  @HostListener('mouseout')
    mouseout(){
      this.render.setStyle(this.el.nativeElement,'opacity','1')
  }

  

}
