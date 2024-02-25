import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  addUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users', JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type': 'application/' }),
    });
  }
}
