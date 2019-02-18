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

  getItems(query: String): Observable<any> {
    return this.http.get(`${API_PATH.SEARCH_DETAIL}${query}`);
  }

  getProductDetail(productId: String): Observable<any> {
    return this.http.get(`${API_PATH.PRODUCT_DETAIL}${productId}`);
  }

  setCategories(categories: string[]) {
    this.subject.next(categories);
  }
  
  getCategories(): Observable<any> {
    return this.subject.asObservable();
  }
}
