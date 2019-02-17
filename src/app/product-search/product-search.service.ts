import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_SEARCH_PATH } from './common/constants/product-search.constants';

@Injectable()
export class ProductSearchService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getItems(query: String): Observable<any> {
    return this.http.get(`${PRODUCT_SEARCH_PATH.SEARCH_DETAIL}${query}`);
  }

  getProductDetail(productId: String) {
    return this.http.get(`${PRODUCT_SEARCH_PATH.SEARCH_DETAIL}${productId}`);
  }
}
