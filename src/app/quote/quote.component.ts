import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
      new Quote('Quote ni wewe ', 'Mandela', 'Me'),
      new Quote('Quote ya pili', 'HAjulikani', 'NI mimi')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
