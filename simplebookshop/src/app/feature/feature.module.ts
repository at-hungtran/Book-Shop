import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-card/shopping-card.component';
import { AppRoutingModule } from './feature.routing';

@NgModule({
  declarations: [
    ProductComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    ProductComponent,
    ShoppingCartComponent,
    AppRoutingModule,
  ],
})
export class FeatureModule { }
