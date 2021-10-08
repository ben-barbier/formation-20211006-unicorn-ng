import { Component } from '@angular/core';
import { CartSelectors } from '../../store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cart$ = this._cartSelectors.cart$;

  constructor(private readonly _cartSelectors: CartSelectors) {}
}
