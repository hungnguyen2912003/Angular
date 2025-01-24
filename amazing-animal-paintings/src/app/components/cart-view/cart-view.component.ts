import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: false,
  
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit{

  cartItems: Product[] = [];

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.getItemCart().subscribe(data => {
      this.cartItems = data;
    })
  }

}
