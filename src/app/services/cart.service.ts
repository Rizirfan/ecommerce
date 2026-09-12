import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, WishlistItem, Order, Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly CART_KEY = 'paperly_cart';
  private readonly WISHLIST_KEY = 'paperly_wishlist';
  private readonly ORDERS_KEY = 'paperly_orders';

  private cartItems$ = new BehaviorSubject<CartItem[]>(this.load(this.CART_KEY));
  private wishlistItems$ = new BehaviorSubject<WishlistItem[]>(this.load(this.WISHLIST_KEY));
  private ordersItems$ = new BehaviorSubject<Order[]>(this.load(this.ORDERS_KEY));

  cart$ = this.cartItems$.asObservable();
  wishlist$ = this.wishlistItems$.asObservable();
  orders$ = this.ordersItems$.asObservable();

  private load(key: string): any[] {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch { return []; }
  }

  private saveCart(items: CartItem[]): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(items));
    this.cartItems$.next(items);
  }

  private saveWishlist(items: WishlistItem[]): void {
    localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(items));
    this.wishlistItems$.next(items);
  }

  private saveOrders(items: Order[]): void {
    localStorage.setItem(this.ORDERS_KEY, JSON.stringify(items));
    this.ordersItems$.next(items);
  }

  // Cart
  getCartItems(): CartItem[] { return this.cartItems$.value; }

  addToCart(product: Product, quantity: number = 1): void {
    const items = this.getCartItems();
    const existing = items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ product, quantity });
    }
    this.saveCart(items);
  }

  removeFromCart(productId: number): void {
    this.saveCart(this.getCartItems().filter(i => i.product.id !== productId));
  }

  updateCartQuantity(productId: number, quantity: number): void {
    const items = this.getCartItems();
    const item = items.find(i => i.product.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart(items);
    }
  }

  getCartTotal(): number {
    return this.getCartItems().reduce((sum, i) => {
      const price = i.product.discount > 0
        ? i.product.price * (1 - i.product.discount / 100)
        : i.product.price;
      return sum + price * i.quantity;
    }, 0);
  }

  getCartCount(): number {
    return this.getCartItems().reduce((sum, i) => sum + i.quantity, 0);
  }

  // Wishlist
  getWishlistItems(): WishlistItem[] { return this.wishlistItems$.value; }

  addToWishlist(product: Product): void {
    const items = this.getWishlistItems();
    if (!items.find(i => i.product.id === product.id)) {
      items.push({ product });
      this.saveWishlist(items);
    }
  }

  removeFromWishlist(productId: number): void {
    this.saveWishlist(this.getWishlistItems().filter(i => i.product.id !== productId));
  }

  isInWishlist(productId: number): boolean {
    return this.getWishlistItems().some(i => i.product.id === productId);
  }

  moveToCart(productId: number): void {
    const item = this.getWishlistItems().find(i => i.product.id === productId);
    if (item) {
      this.addToCart(item.product);
      this.removeFromWishlist(productId);
    }
  }

  // Orders
  getOrders(): Order[] { return this.ordersItems$.value; }

  placeOrder(name: string, email: string, phone: string, address: string, city: string, state: string, pincode: string): Order {
    const items = this.getCartItems();
    const subtotal = this.getCartTotal();
    const delivery = subtotal >= 500 ? 0 : 49;
    const total = subtotal + delivery;

    const order: Order = {
      id: 'PPL-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
      items: items.map(i => ({ product: i.product, quantity: i.quantity })),
      subtotal, delivery, total,
      status: 'Confirmed',
      name, email, phone, address, city, state, pincode
    };

    const orders = this.getOrders();
    orders.unshift(order);
    this.saveOrders(orders);
    this.saveCart([]);
    return order;
  }

  clearCart(): void { this.saveCart([]); }
}
