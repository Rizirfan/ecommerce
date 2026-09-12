import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { WishlistItem } from '../../models/product';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  items: WishlistItem[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.cartService.wishlist$.subscribe(() => {
      this.items = this.cartService.getWishlistItems();
    });
  }

  getDiscountedPrice(product: any): number {
    return this.productService.getDiscountedPrice(product);
  }

  moveToCart(productId: number): void {
    this.cartService.moveToCart(productId);
  }

  remove(productId: number): void {
    this.cartService.removeFromWishlist(productId);
  }
}
