import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../models/product';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  items: CartItem[] = [];
  subtotal = 0;
  delivery = 0;
  total = 0;
  orderPlaced = false;
  orderId = '';
  formError = '';

  form = {
    name: '', email: '', phone: '', address: '', city: '', state: '', pincode: ''
  };

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {
    this.items = this.cartService.getCartItems();
    this.subtotal = this.cartService.getCartTotal();
    this.delivery = this.subtotal >= 500 ? 0 : 49;
    this.total = this.subtotal + this.delivery;
  }

  getDiscountedPrice(product: any): number {
    return this.productService.getDiscountedPrice(product);
  }

  isFormValid(): boolean {
    return !!(this.form.name && this.form.email && this.form.phone &&
      this.form.address && this.form.city && this.form.state && this.form.pincode);
  }

  placeOrder(): void {
    if (!this.isFormValid()) {
      this.formError = 'Please fill in all fields.';
      return;
    }
    const order = this.cartService.placeOrder(
      this.form.name, this.form.email, this.form.phone,
      this.form.address, this.form.city, this.form.state, this.form.pincode
    );
    this.orderId = order.id;
    this.orderPlaced = true;
  }
}
