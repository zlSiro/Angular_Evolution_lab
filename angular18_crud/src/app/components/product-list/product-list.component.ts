import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Output() edit = new EventEmitter<Product>(); // Emitimos el producto a editar al componente padre, que es ProductFormComponent.

  // Lista de productos que mostraremos en el template.
  products: Product[];

  searchTerm = '';

  // Angular inyecta ProductService en el componente.
  constructor(private productService: ProductService) {
    // El servicio ya está disponible dentro del constructor.
    this.products = this.productService.getProducts();
  }

  deleteProduct(productId: number): void {
    // Llamamos al método deleteProduct del servicio para eliminar el producto.
    this.productService.deleteProduct(productId);

    this.products = this.productService.getProducts();
  }
  
  searchProducts(): Product[] {
    const term = this.searchTerm.toLowerCase().trim();
    
    if (!term) {
      return this.products;
    }

    return this.products.filter(product => 
      product.name.toLowerCase().includes(term)
    );
  }

  editProduct(product: Product): void {
    this.edit.emit(product);
  }
}
