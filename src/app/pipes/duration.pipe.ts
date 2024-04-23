import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(minutes?: number): string {
    let results = '';
    if(minutes){
      const hours = Math.floor(minutes / 60);
      const remainMinutes = minutes % 60;


      if (hours > 0) {
        results += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
      }

      if (remainMinutes > 0) {
        if (results !== '') {
          results += ' and ';
        }
        results += `${remainMinutes} ${remainMinutes === 1 ? 'minute' : 'minutes'}`;
      }
    }
    return results !== '' ? results : '0 minutes';
  }
}
