import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl + '/cart';

  constructor(private http:HttpClient) { }

  addtoCart(product: Product): Observable<Product[]>{
    return this.http.post<Product[]>(this.apiUrl, product);
  }

  getItemCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  clearCart(): Observable<Product[]>{
    return this.http.delete<Product[]>(this.apiUrl);
  }
}
