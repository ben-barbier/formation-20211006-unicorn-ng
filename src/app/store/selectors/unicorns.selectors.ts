import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { EntityState } from '../reducers';

// selectors
const getUnicorns = createFeatureSelector<Unicorn[]>('unicorns');
const getUnicorn = (id: number) => createSelector(getUnicorns, (state: Unicorn[]) => state.find((u) => u.id === id));

@Injectable({ providedIn: 'root' })
export class UnicornsSelectors {
  constructor(private store: Store<EntityState>) {}

  unicorns$ = this.store.select(getUnicorns);
  unicorn$ = (id: number) => this.store.select(getUnicorn(id));
}
