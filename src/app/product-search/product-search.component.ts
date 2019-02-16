import { Component } from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchText: String = '';
  //TODO agregar claves de traduccion
  searchPlaceholder = 'Nunca dejes de buscar';

}
