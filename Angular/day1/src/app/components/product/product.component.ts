import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { DiscountOffers } from '../../models/DiscountOffers';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  Discount: DiscountOffers;
  ClientName: string = '';
  ProductList: IProduct[] = [];
  filteredProduct: IProduct[] = [];

  isPurchased: boolean = false;

  togglePurchases() {
    console.log('togglePurchases');
    this.isPurchased = !this.isPurchased;
  }

  constructor() {
    this.Discount = DiscountOffers.TenPercent;
    this.ClientName = 'Ali Elgohary';
    this.ProductList = [
      {
        ID: 1,
        Name: 'Laptop',
        Quantity: 2,
        Price: 999.99,
        Img: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CategoryID: 1,
      },
      {
        ID: 2,
        Name: 'Smartphone',
        Quantity: 100,
        Price: 699.99,
        Img: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CategoryID: 1,
      },
      {
        ID: 3,
        Name: 'Headphones',
        Quantity: 1,
        Price: 149.99,
        Img: 'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CategoryID: 2,
      },
      {
        ID: 4,
        Name: 'Wireless Mouse',
        Quantity: 0,
        Price: 29.99,
        Img: 'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CategoryID: 3,
      },
      {
        ID: 5,
        Name: 'External Hard Drive',
        Quantity: 80,
        Price: 129.99,
        Img: 'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CategoryID: 4,
      },
    ];
    this.filteredProduct = this.ProductList;

  }

  set listFilterdValue(value: number) {
    this.FilterProducts(value);
  }


  FilterProducts(value: number) {
    if (value !== null) {
      return this.filteredProduct = this.ProductList.filter(
        (product: IProduct) => product.CategoryID == value
      );
    } else {
      return this.filteredProduct = this.ProductList;
    }
  }

  buyProduct(product: IProduct) {
    if (product.Quantity > 0) {
      product.Quantity--;
    }
  }

  myStore: Store = new Store(
    'first product',
    ['branch 1', 'sad', 'sad'],
    'assets/img1.jpg'
  );
}