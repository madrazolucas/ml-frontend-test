import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    searchText: String = null;
    searchCategories = ['Category1','Category2','Category3'];
    searchDetailList: any= {
            author: {
                name: 'Lucas',
                lastname: 'Madrazo'
            },
            categories: ['Electronica','Libro'],
            items: [
                {
                    id: "111AAA",
                    title: 'Zapatillas Nike',
                    price: {
                        currency: 'ARS',
                        amount: 3000,
                        decimals: 10
                    },
                    picture: 'http://mla-s2-p.mlstatic.com/849855-MLA27578264762_062018-I.jpg',
                    condition: 'new',
                    location: 'Buenos Aires',
                    free_shipping: true
                },
                {
                id: "111AAB",
                title: 'Zapatillas Nike 2',
                price: {
                    currency: 'ARS',
                    amount: 4000,
                    decimals: 10
                },
                picture: 'http://mla-s1-p.mlstatic.com/753560-MLA27839182016_072018-I.jpg',
                condition: 'new',
                location: 'Cordoba',
                free_shipping: true
                }
            ]

        };

  openProductDetails(product: any): void {
    this.router.navigate(['/items', product.id]);
  }
}
