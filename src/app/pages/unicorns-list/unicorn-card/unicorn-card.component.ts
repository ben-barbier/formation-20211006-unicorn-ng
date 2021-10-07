import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
  @Input() public unicorn: Unicorn | undefined;

  constructor(private readonly _cartService: CartService) {}

  public isInCart$: Observable<boolean> = this._cartService.cart$.pipe(map((cart) => cart.some((u) => u.id === this.unicorn?.id)));

  public toggleToCart(unicorn: Unicorn): void {
    this._cartService.toggleToCart(unicorn);
  }
}
