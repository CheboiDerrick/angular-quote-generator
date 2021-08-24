import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime',

})
export class ElapsedTimePipe implements PipeTransform {
  transform(value: any): any {
    setInterval(function(){ 
      let seconds: number = 0
    let minutes: number
    let hours: number
    let days: number
    let display: any

      let now = new Date().getTime();
      console.log(now);
      console.log(value);

      seconds = Math.floor(((now) - value) / 1000);
      minutes = Math.floor(seconds / 60);
      hours = Math.floor(minutes / 60);
      days = Math.floor(hours / 24);

      hours = hours - (days * 24);
      minutes = minutes - (days * 24 * 60) - (hours * 60);
      seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

      console.log(seconds);


    
      if (days >= 1) {
        return days + ' days ago'
      } else if (hours >= 1) {
        return hours + ' hours ago'
      } else if (minutes >= 1) {
        console.log(minutes)
        display = minutes + ' minute(s) ago'
        console.log(display);

        return display
      } else if (seconds >= 1) {
        console.log(seconds);
        display = seconds + ' seconds ago'
        console.log(display);

        return display
      }
     }, 1000);
    
  }


}
