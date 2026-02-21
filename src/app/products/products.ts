import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {

  cartCount = 0;
  totalPrice = 0;
  showAlert = false;
  selectedProductName = '';

  products = [
    {
      name: 'Mountain Bike',
      description: 'Perfect for off-road adventures',
      price: 500,
      image: 'https://www.rdcyclesph.com/cdn/shop/files/SensorAlloySport1.png?v=1694494395'
    },
    {
      name: 'BMX Bike',
      description: 'Best for tricks and freestyle riding',
      price: 300,
      image: 'http://www.luxbmx.com/cdn/shop/files/RARERV033_00.jpg?v=1754546707'
    },
    {
      name: 'Road Bike',
      description: 'Lightweight and fast for road cycling',
      price: 750,
      image: 'https://image.made-in-china.com/2f0j00tAJlaMmClrki/High-Quality-Cheaper-Factory-Cool-Design-Hot-Selling-700c-Rode-Bicycle-Bikes.webp'
    },
    {
      name: 'Electric Bike',
      description: 'Assisted pedaling for smooth rides',
      price: 1200,
      image: 'https://www.rambobikes.com/cdn/shop/files/Savage_2.0_Black_2_shadow.png?v=1756933607'
    }
  ];

  addToCart(product: any) {
    this.cartCount++;
    this.totalPrice += product.price;

    // Show alert
    this.selectedProductName = product.name;
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 2000);
  }
}
