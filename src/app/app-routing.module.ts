import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbandonedCartComponent } from './abandoned-cart/abandoned-cart.component';
import { AverageCartComponent } from './average-cart/average-cart.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SalesComponent } from './sales/sales.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'stats', component: StatsComponent },
      { path: 'order', component: OrderComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'abandoned_cart', component: AbandonedCartComponent },
      { path: 'averageCart', component: AverageCartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
