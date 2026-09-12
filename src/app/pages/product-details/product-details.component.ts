import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, FormsModule, ProductCardComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  quantity = 1;
  addedMessage = '';
  relatedProducts: Product[] = [];
  Object = Object;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productService.getProductById(id) || null;
      this.quantity = 1;
      this.addedMessage = '';
      if (this.product) {
        this.relatedProducts = this.productService.getRelatedProducts(this.product);
      }
    });
  }

  get discountedPrice(): number {
    return this.product ? this.productService.getDiscountedPrice(this.product) : 0;
  }

  get stars(): string {
    if (!this.product) return '';
    return '★'.repeat(Math.floor(this.product.rating)) + '☆'.repeat(5 - Math.floor(this.product.rating));
  }

  get inWishlist(): boolean {
    return this.product ? this.cartService.isInWishlist(this.product.id) : false;
  }

  incrementQty(): void {
    if (this.product && this.quantity < this.product.stock) this.quantity++;
  }

  decrementQty(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(): void {
    if (!this.product) return;
    this.cartService.addToCart(this.product, this.quantity);
    this.addedMessage = 'Added to cart!';
    setTimeout(() => this.addedMessage = '', 3000);
  }

  buyNow(): void {
    this.addToCart();
    window.location.href = '/checkout';
  }

  toggleWishlist(): void {
    if (!this.product) return;
    if (this.inWishlist) {
      this.cartService.removeFromWishlist(this.product.id);
    } else {
      this.cartService.addToWishlist(this.product);
    }
  }
}
