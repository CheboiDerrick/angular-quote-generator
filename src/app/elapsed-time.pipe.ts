import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime',
  
})
export class ElapsedTimePipe implements PipeTransform {
  transform(value: any): any {
    let time:string=''
    let input = value.valueOf();
    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;
    setInterval(function(){ 
    var current = new Date().valueOf();
    var elapsed = current - input;

    if (elapsed < msPerMinute) {
      time= Math.round(elapsed / 1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
      time= Math.round(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
      time= Math.round(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
      time= 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
      time= 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    }

    else {
      console.log('inside the if condition', elapsed);
      time= 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
     }, 1000);
     let display=time
     return display

  }
}



