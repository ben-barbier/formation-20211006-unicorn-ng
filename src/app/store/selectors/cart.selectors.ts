import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { EntityState } from '../reducers';
import { getUnicorns } from './unicorns.selectors';

// selectors
const getCart = createFeatureSelector<number[]>('cart');
const getCartUnicorns = createSelector([getCart, getUnicorns], (cart, unicorns) => unicorns.filter((u) => cart.includes(u.id)));
const isInCart = (unicorn: Unicorn) => createSelector(getCart, (cart) => cart.some((id) => id === unicorn.id));

@Injectable({ providedIn: 'root' })
export class CartSelectors {
  constructor(private store: Store<EntityState>) {}

  cart$ = this.store.select(getCartUnicorns);
  isInCart$ = (unicorn: Unicorn) => this.store.select(isInCart(unicorn));
}
