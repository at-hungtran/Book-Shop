import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiService } from '../service/api.service';
import { StorageService } from '../../share/service/storage.service';
import { ProductComponent } from '../../feature/product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  count: number;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.setCount();
  }

  setCount(): void {
    this.storageService.currentCount.subscribe(count => { this.count = count; });
  }
}
