import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class ProductModule { }
