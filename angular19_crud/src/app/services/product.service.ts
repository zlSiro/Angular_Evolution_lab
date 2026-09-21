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
      description: 'Teclado mecánico RGB para gaming',
      price: 89990,
      stock: 15
    },
    {
      id: 2,
      name: 'Mouse gamer',
      description: 'Mouse óptico de alta precisión',
      price: 49990,
      stock: 25
    },
    {
      id: 3,
      name: 'Monitor 27"',
      description: 'Monitor IPS de 27 pulgadas',
      price: 199990,
      stock: 8
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