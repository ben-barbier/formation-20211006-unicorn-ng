import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() public deleted = new EventEmitter<Unicorn>();

  constructor(private readonly _cartService: CartService) {}

  public isInCart$: Observable<boolean> = this._cartService.cart$.pipe(map((cart) => cart.some((u) => u.id === this.unicorn?.id)));

  public toggleToCart(unicorn: Unicorn): void {
    this._cartService.toggleToCart(unicorn);
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    this.deleted.emit(unicorn);
  }
}
