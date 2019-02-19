import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from './common/constants/product-search.constants';

@Injectable()
export class ProductSearchService {
  http: HttpClient;
  subject: Subject<any>;

  constructor(http: HttpClient) {
    this.http = http;
    this.subject = new Subject()
  }

  /**
   * Function to get all items given a query string
   * @param query string with the search value
   */
  getItems(query: String): Observable<any> {
    return this.http.get(`${API_PATH.SEARCH_DETAIL}${query}`);
  }

  /**
   * Function to get item details values given a product id
   * @param productId id that represent a specific product
   */
  getProductDetail(productId: String): Observable<any> {
    return this.http.get(`${API_PATH.PRODUCT_DETAIL}${productId}`);
  }

  /**
   * Function to update categories value to subscriptors
   * @param categories an array with categories values
   */
  setCategories(categories: string[]) {
    this.subject.next(categories);
  }
  
  /**
   * Function to get a subscription for changes in categories
   */
  getCategories(): Observable<any> {
    return this.subject.asObservable();
  }
}
