import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductModule } from './modules/product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './components/cart/cart.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CartModule } from './modules/cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CartModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
