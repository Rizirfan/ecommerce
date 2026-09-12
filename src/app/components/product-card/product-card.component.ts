import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  get discountedPrice(): number {
    return this.productService.getDiscountedPrice(this.product);
  }

  get inWishlist(): boolean {
    return this.cartService.isInWishlist(this.product.id);
  }

  get stars(): string {
    return '★'.repeat(Math.floor(this.product.rating)) + '☆'.repeat(5 - Math.floor(this.product.rating));
  }

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart(this.product);
  }

  toggleWishlist(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.inWishlist) {
      this.cartService.removeFromWishlist(this.product.id);
    } else {
      this.cartService.addToWishlist(this.product);
    }
  }
}
