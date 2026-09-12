import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories: string[] = [];
  filteredProducts: Product[] = [];
  selectedCategory = '';
  sortBy = '';
  searchQuery = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categories = this.productService.getCategories();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || '';
      this.searchQuery = params['search'] || '';
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let products = this.productService.getProducts();

    if (this.searchQuery) {
      products = this.productService.searchProducts(this.searchQuery);
    }

    if (this.selectedCategory) {
      products = products.filter(p => p.category === this.selectedCategory);
    }

    if (this.sortBy) {
      products = this.productService.sortProducts(products, this.sortBy);
    }

    this.filteredProducts = products;
  }

  resetFilters(): void {
    this.selectedCategory = '';
    this.sortBy = '';
    this.searchQuery = '';
    this.router.navigate(['/shop']);
  }
}
