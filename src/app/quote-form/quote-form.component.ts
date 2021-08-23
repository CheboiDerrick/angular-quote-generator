import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote(0,'','','')
  @Output() addQuote= new EventEmitter <Quote> ()

  submitQuote(f:NgForm){
    if(f.valid){
      this.addQuote.emit(this.newQuote);
      this.newQuote=new Quote(0,'','','')
    }else{
      alert('Ensure to fill all required fields')
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
