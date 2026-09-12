import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: CartItem[] = [];
  total = 0;
  delivery = 0;
  itemCount = 0;
  freeDeliveryThreshold = 500;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.cartService.cart$.subscribe(() => {
      this.items = this.cartService.getCartItems();
      this.total = this.cartService.getCartTotal();
      this.itemCount = this.cartService.getCartCount();
      this.delivery = this.total >= this.freeDeliveryThreshold ? 0 : 49;
    });
  }

  get grandTotal(): number {
    return this.total + this.delivery;
  }

  get deliveryProgress(): number {
    return Math.min((this.total / this.freeDeliveryThreshold) * 100, 100);
  }

  get amountForFreeDelivery(): number {
    return Math.max(this.freeDeliveryThreshold - this.total, 0);
  }

  getDiscountedPrice(product: any): number {
    return this.productService.getDiscountedPrice(product);
  }

  updateQty(productId: number, qty: number): void {
    this.cartService.updateCartQuantity(productId, qty);
  }

  remove(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
