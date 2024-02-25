import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { userGuard } from './guards/user.guard';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent, canActivate: [userGuard]},
  {path: 'order', component: OrderComponent, canActivate: [userGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];
