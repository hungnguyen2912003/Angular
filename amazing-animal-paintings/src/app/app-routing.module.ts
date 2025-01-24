import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'cart', component: CartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
