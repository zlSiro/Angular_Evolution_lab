import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Teclado mecánico',
      price: 89990
    },
    {
      id: 2,
      name: 'Mouse gamer',
      price: 49990
    },
    {
      id: 3,
      name: 'Monitor 27"',
      price: 199990
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(
      product => product.id !== id
    );
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(
      product => product.id === updatedProduct.id
    );

    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

}