import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = environment.apiUrl + '/cart';
  private apiCheckoutUrl = environment.apiUrl + '/checkout';

  constructor(private http:HttpClient) { }

  addtoCart(product: Product): Observable<Product[]>{
    return this.http.post<Product[]>(this.apiCartUrl, product);
  }

  getItemCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart(): Observable<Product[]>{
    return this.http.delete<Product[]>(this.apiCartUrl);
  }

  checkOut(products: Product[]): Observable<void>{
    return this.http.post<void>(this.apiCheckoutUrl, products);
  }
}
