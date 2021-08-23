import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime',
  
})
export class ElapsedTimePipe implements PipeTransform {
  transform(value: any): any {
  
    let input = value.valueOf();
    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;

    let update=setInterval(function(){ 
    var current = new Date().valueOf();
    var elapsed = current - input;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
      return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
      return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    }

    else {
      console.log('inside the if condition', elapsed);
      return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
     }, 1000);

     return update

  }
}



