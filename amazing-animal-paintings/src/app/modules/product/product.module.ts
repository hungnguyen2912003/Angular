import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ProductModule { }
