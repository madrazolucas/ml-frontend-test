import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchText: String = '';
  //TODO agregar claves de traduccion
  searchPlaceholder = 'Nunca dejes de buscar';

  constructor(private router: Router) {}

  searchProduct(): void {
    this.router.navigate(['/items'], { queryParams: { search: this.searchText } });
  }

}
