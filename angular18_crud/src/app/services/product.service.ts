import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private nextId: number = 4; // Inicializamos el siguiente ID en 4, ya que tenemos 3 productos iniciales
  private products: Product[] = [
    {
      id: 1,
      name: "Teclado Mecanico",
      description: "Teclado mecánico de alta calidad",
      price: 100,
      stock: 10
    },
    {
      id: 2,
      name: 'Mouse gamer',
      description: 'Mouse inalámbrico',
      price: 39990,
      stock: 20
    },
    {
      id: 3,
      name: 'Monitor 27"',
      description: 'Monitor QHD 180 Hz',
      price: 249990,
      stock: 8
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    product.id = this.nextId; // Asignamos el siguiente ID al producto
    this.nextId++; // Incrementamos el siguiente ID para el próximo producto
    this.products.push(product)
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
       this.products[index] = updatedProduct;
      }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

}