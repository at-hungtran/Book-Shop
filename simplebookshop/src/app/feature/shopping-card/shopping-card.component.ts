import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../share/service/api.service';
import { StorageService } from '../../share/service/storage.service';
import { Book } from '../../book';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})

export class ShoppingCartComponent implements OnInit {
  books: Book[];
  idProducts: number[];
  productsShopCart: Book[] = [];
  url = ['books'];

  constructor(private apiService: ApiService, private storageService: StorageService) {}

  ngOnInit() {
    this.setToBooks();
    this.setIdFromLocal();
  }

  setToBooks(): void {
    this.apiService.get(this.url).subscribe(books => { this.books = books; this.setProductsShopCart(); });
  }

  setIdFromLocal(): void {
    const key = 'idproduct';
    this.idProducts = this.storageService.get(key);
  }

  setProductsShopCart(): void {
    for (let i = 0; i < this.books.length; i++) {
      if (this.idProducts.indexOf(this.books[i].id) > -1) {
        this.productsShopCart.push(this.books[i]);
        console.log(this.productsShopCart);
      }
    }
    for (let i = 0; i < this.idProducts.length; i++) {
      const listProductShopCart = this.productsShopCart.map(item => item.id);
      const index = listProductShopCart.indexOf(this.idProducts[i]);
      if (index > -1) {
        if (this.productsShopCart[index].amount === undefined) {
          this.productsShopCart[index].amount = 0;
        }
        this.productsShopCart[index].amount++;
      }
    }
  }
}
