import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.scss']
})
export class SearchCategoryComponent {
  @Input() searchCategories: String[];

  constructor() {}

}
