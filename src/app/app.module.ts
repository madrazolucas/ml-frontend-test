import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { SearchDetailComponent } from './product-search/search-detail/search-detail.component';
import { ProductDetailComponent } from './product-search/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    SearchDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
