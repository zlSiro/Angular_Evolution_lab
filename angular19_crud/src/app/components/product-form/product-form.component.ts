import { Component, input, effect, output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  // Angular 18:
  // @Input() productToEdit: Product | null = null;

  // Angular 19:
  // Signal Input estable desde Angular 19.
  productToEdit = input<Product | null>(null);

  // Angular 18:
  // @Output() finished = new EventEmitter<void>();

  // Angular 19:
  // Function-based Output estable.
  finished = output<void>();


  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };

  constructor(private productService: ProductService) {}

  
  private syncProductEffect = effect(() => {
    const product = this.productToEdit();

    if (product) {
      this.product = { ... product };
    }
  });

  addProduct(): void {
    if (
      !this.product.name.trim() ||
      !this.product.description.trim() ||
      this.product.price <= 0 ||
      this.product.stock < 0
    ) {
      console.log('Producto inválido');

      return;
    }

    this.product.id = Date.now(); // Generar un ID único basado en la fecha actual

    this.productService.addProduct(this.product);

    console.log('Producto agregado: ', this.product);

    this.resetForm();
  }

  updateProduct(): void {

    if (
      !this.product.name.trim() ||
      !this.product.description.trim() ||
      this.product.price <= 0 ||
      this.product.stock < 0
    ) {
      console.log('Producto inválido');

      return;
    }

    this.productService.updateProduct(this.product);

    console.log('Producto actualizado:', this.product);

    this.resetForm();

    this.finished.emit();

  }

  resetForm(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };
  }

  cancelEdit(): void {
    this.resetForm();
    this.finished.emit();
  }
}
