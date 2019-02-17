import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SearchDetailItemModel } from './search-detail-item.model';
import { ProductSearchService } from '../product-search.service';

@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent {

  searchQuery: String;  
  searchItems: SearchDetailItemModel[];
  searchCategories: String[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productSearchService: ProductSearchService
  ) {
    this.searchItems = [];
    this.searchCategories = [];
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe((params: ParamMap) => {
        this.searchQuery = params.get('search');
        if (this.searchQuery) {
          this.getSearchDetail();
        }
      });
  }

  getSearchDetail(): void {
    this.productSearchService
      .getItems(this.searchQuery)
      .subscribe(
        response => {
          this.searchItems = response.items;
          this.searchCategories = response.categories;
        }
      );
  }

  openProductDetails(product: any): void {
    this.router.navigate(['/items', product.id]);
  }
}
