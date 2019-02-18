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
  searchDetailList: SearchDetailItemModel[];
  isLoading: boolean;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productSearchService: ProductSearchService
  ) {
    this.isLoading = false;
    this.searchDetailList = [];
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
    this.isLoading = true;
    this.productSearchService
      .getItems(this.searchQuery)
      .subscribe(
        response => {
          this.searchDetailList = response.items;
          this.productSearchService.setCategories(response.categories);
          this.isLoading = false;
        }
      );
  }

  openProductDetails(item: SearchDetailItemModel): void {
    this.router.navigate(['/api/items', item.id]);
  }
}
