import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductSearchService } from './product-search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchText: String = '';
  searchCategories: String[];
  categoriesSubscription: Subscription;

  constructor(private router: Router,
              private productSearchService: ProductSearchService) {
    this.categoriesSubscription = this.productSearchService
      .getCategories()
      .subscribe( categories => { this.searchCategories = categories });
  }

  /**
   * Function to navigate to items view when a search is performed
   */
  searchProduct(): void {
    this.router.navigate(['/api/items'], { queryParams: { search: this.searchText } });
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }
}
