import { Component } from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  productCategories: String[] = ['Categoria 1', 'Categoria 2']
  product = {
    author: {
        name: 'Lucas',
        lastname: 'Madrazo'
    },
    categories: ['Electronica','Libro'],
    item:{
            id: "111AAA",
            title: 'Zapatillas Nike',
            price: {
                currency: 'ARS',
                amount: 3000,
                decimals: 10
            },
            picture: 'https://http2.mlstatic.com/apple-ipod-touch-32gb-6ta-gen-nuevos-gtia-escrita-D_NQ_NP_843653-MLA28149398126_092018-O.jpg',
            condition: 'new',
            location: 'Buenos Aires',
            sold_quantity: 100,
            free_shipping: true,
            description: "Es un miu buen productop"
        }
};


}
