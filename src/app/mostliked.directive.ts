import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appMostliked]'
})
export class MostlikedDirective {
  @Input () sortByLikes: any=[]
  constructor(private elem:ElementRef) {}

  ngOnInit(){
    // this.sortByLikes[0]=this.elem
    // this.elem.nativeElement.style.border='2px dashed'
    }
      
    }
  

