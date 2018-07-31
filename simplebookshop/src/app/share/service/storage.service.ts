import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class StorageService {
  key = 'idproduct';
  listIdProduct = localStorage.getItem(this.key) ? JSON.parse(localStorage.getItem(this.key)) : [];
  countBehavior = new BehaviorSubject(this.listIdProduct.length);
  currentCount = this.countBehavior.asObservable();

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  pustToList(id: number): void {
    this.listIdProduct.push(id);
    this.increaseCountProduct();
  }

  increaseCountProduct() {
    this.countBehavior.next(this.listIdProduct.length);
  }
}
