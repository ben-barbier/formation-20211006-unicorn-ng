import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartDispatchers } from '../../../store/dispatchers/cart.dispatchers';
import { UnicornsDispatchers } from '../../../store/dispatchers/unicorns.dispatchers';
import { CartSelectors } from '../../../store/selectors/cart.selectors';
import { EditUnicornComponent } from './edit-unicorn/edit-unicorn.component';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
  @Input() public unicorn!: Unicorn;
  @Output() public deleted = new EventEmitter<Unicorn>();

  public isInCart$: Observable<boolean> | undefined;

  constructor(
    // private readonly _cartService: CartService,
    private readonly _dialog: MatDialog,
    private readonly _unicornsDispatchers: UnicornsDispatchers,
    private readonly _cartDispatchers: CartDispatchers,
    private readonly _cartSelectors: CartSelectors
  ) {}

  public toggleToCart(unicorn: Unicorn): void {
    // this._cartService.toggleToCart(unicorn);
    this._cartDispatchers.toggleToCart(unicorn);
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    this.deleted.emit(unicorn); // TODO !
  }

  public openEditDialog(): void {
    this._dialog
      .open(EditUnicornComponent, { data: { unicorn: this.unicorn } })
      .afterClosed()
      .pipe(filter((unicorn) => !!unicorn))
      .subscribe((unicorn: Unicorn) => this._unicornsDispatchers.updateUnicorn(unicorn));
  }

  ngOnInit(): void {
    this.isInCart$ = this._cartSelectors.isInCart$(this.unicorn);
    // .pipe(map((cart) => cart.some((u) => u.id === this.unicorn?.id)));
  }
}
