import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public cart: Unicorn[] = [];

  public isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(private readonly _breakpointObserver: BreakpointObserver, private readonly _cartService: CartService) {
    this._cartService.cart$.subscribe((cart) => (this.cart = cart));
  }
}
