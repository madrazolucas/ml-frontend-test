import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productCurrency'})
export class ProductCurrencyPipe implements PipeTransform {
  transform(value: string): string {
    let currency: string = "";
    switch(value) {
      case 'ARS': {
        currency = '$';
        break
      }
      case 'USD': {
        currency = 'USD$'
        break;
      }
    }
    return currency;
  }
}