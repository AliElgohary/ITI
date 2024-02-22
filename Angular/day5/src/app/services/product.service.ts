import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproduct> {
    return this.http.get<Iproduct>('http://localhost:3000/products');
  }

  getCategories(): Observable<Iproduct> {
    return this.http.get<Iproduct>('http://localhost:3000/categories');
  }

  insertProduct(product:Iproduct):Observable<any>{
    return this.http.post<Iproduct>('http://localhost:3000/products', JSON.stringify(product), {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/products/${productId}`);
  }

  updateProduct(prod: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/products/${prod.id}`, JSON.stringify(prod), {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }
}
