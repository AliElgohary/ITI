import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/Iproduct';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductsService){}


  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data : IProduct[]) => {
        this.products = data;
        console.log(this.products);
      }
    );
  }

}
