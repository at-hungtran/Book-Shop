import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../share/service/api.service';
import { Book } from '../../book';
import { StorageService } from '../../share/service/storage.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit {
  books: Book[];
  endPoin = ['books'];

  constructor(private storageService: StorageService, private apiService: ApiService) {}

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook(): void {
    this.apiService.get(this.endPoin).subscribe(books => { this.books = books; });
  }

  addProduct(id: number) {
    const key = 'idproduct';
    this.storageService.pustToList(id);
    this.storageService.set(key, JSON.stringify(this.storageService.listIdProduct));
  }
}
