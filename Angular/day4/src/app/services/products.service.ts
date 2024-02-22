import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products : any[] = [];
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<any>(`https://fakestoreapi.com/products`);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
  }
}
