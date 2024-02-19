import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
  standalone: true
})
export class CreditcardPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/\D/g, '');
    const groups = value.match(/.{1,4}/g);
    return groups ? groups.join(' - ') : '';
  }

}
