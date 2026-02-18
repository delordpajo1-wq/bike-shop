import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Products],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  cartCount = 0;
  totalPrice = 0;

  handleAdd(product: any) {
    this.cartCount++;
    this.totalPrice += product.price;
  }
}
