import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder: string = "";

  constructor(private productService: ProductService, private cartService: CartService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addtoCart(product).subscribe({
      next: () => {
        this.snackbar.open('Product added to cart!', '', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.trim().toLowerCase();
    
    this.filteredProducts = this.products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm);
    });

    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string){
    this.sortOrder = sortValue;

    if(sortValue === "priceLowHigh"){
      this.filteredProducts.sort((a, b) => a.price - b.price);
    }
    else if(sortValue === "priceHighLow"){
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

}
