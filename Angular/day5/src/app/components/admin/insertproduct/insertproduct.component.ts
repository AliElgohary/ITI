import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../models/Iproduct';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insertproduct',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './insertproduct.component.html',
  styleUrl: './insertproduct.component.scss',
})
export class InsertproductComponent implements OnInit {
  products: any;
  categories: any;
  product: Iproduct = {
    name: 'prod2',
    price: 80,
    category: 'electronics',
  };
  selectedOption: string = '';
  newProduct: Iproduct = {} as Iproduct;
  isEditing: boolean = false;

  constructor(private productSer: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productSer.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });

    this.productSer.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  submitForm(item: Iproduct): void {
    if (!this.isEditing) {
      this.insertProduct();
    } else {
      this.editProduct(item);
    }
  }

  insertProduct(): void {
    this.productSer.insertProduct(this.newProduct).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/cart']);
    });
  }

  deleteProduct(productID: string) {
    this.productSer.deleteProduct(productID).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

  startEditing(product: Iproduct) {
    this.isEditing = true;
    this.newProduct = { ...product };
  }

  editProduct(product: Iproduct) {
    this.productSer.updateProduct(product).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/cart']);
    });
  }
}
