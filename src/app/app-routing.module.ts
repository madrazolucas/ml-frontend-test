import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDetailComponent } from './product-search/search-detail/search-detail.component';
import { ProductDetailComponent } from './product-search/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'items', component: SearchDetailComponent },
  { path: 'items/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
