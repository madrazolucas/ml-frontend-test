import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { SearchDetailComponent } from './product-search/search-detail/search-detail.component';
import { ProductDetailComponent } from './product-search/product-detail/product-detail.component';
import { SearchCategoryComponent } from './product-search/search-category/search-category.component';
import { ProductSearchService } from './product-search/product-search.service';
import { ProductConditionPipe } from './product-search/common/pipes/product-condition.pipe';
import { ProductCurrencyPipe } from './product-search/common/pipes/product-currency.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    SearchDetailComponent,
    ProductDetailComponent,
    SearchCategoryComponent,
    ProductConditionPipe,
    ProductCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    ProductSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
