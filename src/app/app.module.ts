import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { SearchDetailComponent } from './product-search/search-detail/search-detail.component';
import { ProductDetailComponent } from './product-search/product-detail/product-detail.component';
import { SearchCategoryComponent } from './product-search/search-category/search-category.component';
import { ProductSearchService } from './product-search/product-search.service';
import { ProductConditionPipe } from './product-search/common/pipes/product-condition.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    SearchDetailComponent,
    ProductDetailComponent,
    SearchCategoryComponent,
    ProductConditionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
