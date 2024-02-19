import { Component } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductlistComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  filterValue !: number
}
