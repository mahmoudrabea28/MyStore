import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';


const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'productList', component: ProductListItemComponent},
  { path: 'cart', component: CartComponent},
  { path: 'productdetail', component: ProductDetailComponent},
  { path: 'confirmation', component: ConfirmationComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'confirmationform', component:ConfirmationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
