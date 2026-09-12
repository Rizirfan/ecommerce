import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';

@Injectable({ providedIn: 'root' })
export class ProductService {

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductById(id: number): Product | undefined {
    return PRODUCTS.find(p => p.id === id);
  }

  getCategories(): string[] {
    return [...new Set(PRODUCTS.map(p => p.category))];
  }

  getCategoryCount(category: string): number {
    return PRODUCTS.filter(p => p.category === category).length;
  }

  getBestSellers(): Product[] {
    return PRODUCTS.filter(p => p.rating >= 4.5).slice(0, 4);
  }

  getNewArrivals(): Product[] {
    return PRODUCTS.slice(-4);
  }

  getSpecialOffers(): Product[] {
    return PRODUCTS.filter(p => p.discount >= 10).slice(0, 4);
  }

  searchProducts(query: string): Product[] {
    const q = query.toLowerCase();
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  sortProducts(products: Product[], sortBy: string): Product[] {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low': return sorted.sort((a, b) => a.price - b.price);
      case 'price-high': return sorted.sort((a, b) => b.price - a.price);
      case 'name': return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
      default: return sorted;
    }
  }

  getRelatedProducts(product: Product): Product[] {
    return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  }

  getDiscountedPrice(product: Product): number {
    return product.discount > 0
      ? Math.round(product.price * (1 - product.discount / 100))
      : product.price;
  }
}
