import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminComponent } from './components/admin/admin.component';
import { InsertproductComponent } from './components/admin/insertproduct/insertproduct.component';
import { CartComponent } from './components/cart/cart.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'insert',
        component: InsertproductComponent,
      },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotfoundComponent },
];
