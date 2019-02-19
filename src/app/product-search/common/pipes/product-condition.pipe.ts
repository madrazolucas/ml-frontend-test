import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to transform product condition to readable values
 */
@Pipe({name: 'productCondition'})
export class ProductConditionPipe implements PipeTransform {
  transform(value: string): string {
    let condition: string = "";
    switch(value) {
      case 'new': {
        condition = 'Nuevo';
        break
      }
      case 'used': {
        condition = 'Usado'
        break;
      } 
    }
    return condition;
  }
}