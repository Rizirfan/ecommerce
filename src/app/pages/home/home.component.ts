import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: string[] = [];
  bestSellers: Product[] = [];
  newArrivals: Product[] = [];
  specialOffers: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.bestSellers = this.productService.getBestSellers();
    this.newArrivals = this.productService.getNewArrivals();
    this.specialOffers = this.productService.getSpecialOffers();
  }

  getCount(cat: string): number {
    return this.productService.getCategoryCount(cat);
  }
}
