import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailModel } from './product-detail.model';
import { ProductSearchService } from '../product-search.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId: String;
  productDetail: ProductDetailModel;
  isLoading: boolean;
    
  constructor(
    private activatedRoute: ActivatedRoute,
    private productSearchService: ProductSearchService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.getProductDetail(params);
      }
    );
  }

  getProductDetail(param): void {
    this.isLoading = true;
    this.productId = param.params.id;
    this.productSearchService
      .getProductDetail(this.productId)
      .subscribe(
        response => {
          this.productDetail = response.item;
          this.isLoading = false;
        }
      );
  }
}
