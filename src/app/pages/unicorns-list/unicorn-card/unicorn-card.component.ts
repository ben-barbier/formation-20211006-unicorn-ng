import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { UnicornsDispatchers } from '../../../store/dispatchers/unicorns.dispatchers';
import { EditUnicornComponent } from './edit-unicorn/edit-unicorn.component';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
  @Input() public unicorn: Unicorn | undefined;
  @Output() public deleted = new EventEmitter<Unicorn>();

  constructor(
    private readonly _cartService: CartService,
    private readonly _dialog: MatDialog,
    private readonly _unicornsDispatchers: UnicornsDispatchers
  ) {}

  public isInCart$: Observable<boolean> = this._cartService.cart$.pipe(map((cart) => cart.some((u) => u.id === this.unicorn?.id)));

  public toggleToCart(unicorn: Unicorn): void {
    this._cartService.toggleToCart(unicorn);
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    this.deleted.emit(unicorn);
  }

  public openEditDialog(): void {
    this._dialog
      .open(EditUnicornComponent, { data: { unicorn: this.unicorn } })
      .afterClosed()
      .pipe(filter((unicorn) => !!unicorn))
      .subscribe((unicorn: Unicorn) => this._unicornsDispatchers.updateUnicorn(unicorn));
  }
}
