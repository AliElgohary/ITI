import { Component } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductlistComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  filterValue!: number;
  cart: IProduct[] = [];
  initialCart: number = 1;
  getCartItem(recivedProdcut: IProduct) {
    if (this.cart.includes(recivedProdcut)) {
      recivedProdcut.cartQuantity += 1;
    } else {
      recivedProdcut.cartQuantity = this.initialCart;
      this.cart.push(recivedProdcut);
    }
  }
}
