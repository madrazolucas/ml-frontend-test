import { Pipe, PipeTransform } from '@angular/core';

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