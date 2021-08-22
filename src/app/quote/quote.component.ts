import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('The stars are for only those who can reach them', 'Nelson Mandela', 'Andy Taylor'),
    new Quote('The stars are for only those who can reach them', 'Nelson Mandela', 'Andy Taylor'),
    new Quote('The stars are for only those who can reach them', 'Nelson Mandela', 'Andy Taylor'),
    new Quote('The stars are for only those who can reach them', 'Nelson Mandela', 'Andy Taylor')
  ]

  toggleDetails(index: number) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  addNewQuote(quote: Quote) {
    this.quotes.push(quote)
  }

  addUpvote(index: number) {
    this.quotes[index].upVote += 1
  }

  addDownvote(index: number) {
    this.quotes[index].downVote += 1
  }

  quoteDelete(isDeleteQuote: boolean, index: number) {
    if (isDeleteQuote) {
      let toDelete = confirm(`This will remove ${this.quotes[index].publisher}'s quote. Proceed?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
