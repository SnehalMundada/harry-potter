import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget'
})
export class BudgetPipe implements PipeTransform {
  transform(budget?: string): string {
    if(budget){
      return '$' + budget + ' millions'
    }
    return '';
  }
}
