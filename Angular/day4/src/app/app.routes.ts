import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'contact', component: ContactusComponent},
  {path: 'products', component:ProductComponent},
  {path: 'cart', component:CartComponent},
  {path: 'products/:id', component: ProductdetailsComponent},
  {path: '**', component:NotfoundComponent}
];
