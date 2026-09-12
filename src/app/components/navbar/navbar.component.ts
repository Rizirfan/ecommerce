import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  cartCount = 0;
  menuOpen = false;
  badgePulse = false;
  private sub?: Subscription;

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.cartService.cart$.subscribe(items => {
      const newCount = items.reduce((sum, item) => sum + item.quantity, 0);
      if (newCount !== this.cartCount) {
        this.cartCount = newCount;
        this.badgePulse = true;
        setTimeout(() => {
          this.badgePulse = false;
          this.cdr.markForCheck();
        }, 300);
      } else {
        this.cartCount = newCount;
      }
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
