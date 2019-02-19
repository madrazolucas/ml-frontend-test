import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to transform product currency to their symbols
 */
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