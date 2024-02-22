import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/Iproduct';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit {
  myProduct!: any;
  constructor(
    private prodService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.myProduct = this.prodService
      .getProductById(productId)
      .subscribe((data: IProduct) => {
        this.myProduct = data;
        console.log(this.myProduct);
      });
  }
}
