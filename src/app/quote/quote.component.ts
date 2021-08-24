import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'The stars are for only those who can reach them', 'Nelson Mandela', 'Andy Taylor'),
    new Quote(2,`The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life`, 'Bill Gates', 'Andy Taylor'),
    new Quote(3,`Let's go invent tomorrow instead of worrying about what happened yesterday`, 'Steve Jobs', 'Andy Taylor'),
    new Quote(4,` All of the biggest technological inventions created by man - the computer - says little about his intelligence, but speaks volumes about his laziness.`, 'Mark Kennedy', 'Andy Taylor')

  ]

  toggleDetails(index: number) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
 
  }

  addUpvote(index: number) {
    this.quotes[index].upVote += 1
  }

  addDownvote(index: number) {
    this.quotes[index].downVote += 1
  }

  get sortByLikes()
  {
     return this.quotes.sort((q1, q2) => {
      return q2.upVote - q1.upVote;
    })
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
