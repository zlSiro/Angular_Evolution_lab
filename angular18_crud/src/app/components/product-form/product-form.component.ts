import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnChanges {

  @Input() productToEdit: Product | null = null;

  @Output() saved = new EventEmitter<void>();

  isEditing = false;
  
  product: Product = {
    id: 0,
    description: '',
    name: '',
    price: 0,
    stock: 0
  };
  
  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productToEdit'] && this.productToEdit) {
      this.product = { ...this.productToEdit };
      this.isEditing = true;
    }
  }

  isFormValid(): boolean {
    return (
      this.product.name.trim() !== '' &&
      this.product.description.trim() !== '' &&
      this.product.price > 0 &&
      this.product.stock >= 0
    );
  }

  addProduct(): void {
    if(!this.isFormValid()) {
      return;
    }
    this.productService.addProduct(this.product);

    this.product = {
      id: 0,
      description: '',
      name: '',
      price: 0,
      stock: 0
    };
  }

  updateProduct(): void {

    if (!this.isFormValid()) {
      return;
    }

    this.productService.updateProduct(this.product);

    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };

    this.isEditing = false;

    this.saved.emit();
  }

  cancelEdit(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };

    this.isEditing = false;

    this.saved.emit();
  }
}
