import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { AuthGuard } from './helpers/auth.guard';
import { FoodItemComponent } from './food-item/food-item.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard],  },
  { path: 'food-items/:categoryId', component: FoodItemComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'confirm-order', component: ConfirmOrderComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
}