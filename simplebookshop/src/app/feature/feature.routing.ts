import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-card/shopping-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductComponent },
  { path: 'shopcart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}
