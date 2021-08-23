import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appMostliked]'
})
export class MostlikedDirective {
  @Input () quotes: any=[]
  constructor(private elem:ElementRef) {}

  ngOnInit(){
    this.quotes = this.quotes.sort(function (q1:any, q2:any) {
      return q2.upVote - q1.upVote;
    });
  
    this.quotes()[0]=this.elem
    this.elem.nativeElement.style.border='2px dashed'
    }
      
    }
  

