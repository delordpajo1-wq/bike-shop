import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {

  @Output() addProduct = new EventEmitter<any>();

  selectedCategory = 'All';

  products = [
    {
      name: 'Mountain Bike',
      price: 500,
      category: 'Mountain',
      image: 'https://reidbikes.com/cdn/shop/files/MTB-Sport-MY24-1_1.png?v=1730605841'

    },
    {
      name: 'BMX Bike',
      price: 300,
      category: 'BMX',
      image: 'https://media.rodalink.com/catalog/product/cache/image/680x510/e9c3970ab036de70892d86c6d221abfe/5/0/502868001.jpg'

    },
    {
      name: 'Road Bike',
      price: 700,
      category: 'Road',
      image: 'https://www.99bikes.co.nz/cdn/shop/files/Raven-Trickster-18-Kids-BMX-Bike-Gloss-Black.jpg?v=1755154845&width=2048'

    },
    {
      name: 'Electric Bike',
      price: 1200,
      category: 'Electric',
      image: 'https://www.rambobikes.com/cdn/shop/files/Savage_2.0_Black_2_shadow.png?v=1756933607&width=1946'

    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: any) {
    alert(product.name + ' added to cart!');
    this.addProduct.emit(product);
  }
}
