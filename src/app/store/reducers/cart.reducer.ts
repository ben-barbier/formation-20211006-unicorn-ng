import { createReducer, on } from '@ngrx/store';
import { cleanCart, toggleToCart } from '../actions/cart.actions';
import { deleteUnicornSuccess } from '../actions/unicorns.actions';

const initialState: number[] = [];

export const cartReducer = createReducer(
  initialState,
  on(toggleToCart, (state, { unicorn }) => {
    const isInCart = state.some((id) => id === unicorn.id);
    if (isInCart) {
      return state.filter((id) => id !== unicorn.id);
    } else {
      return [...state, unicorn.id];
    }
  }),
  on(cleanCart, () => []),
  on(deleteUnicornSuccess, (state, { unicorn }) => state.filter((id) => id !== unicorn.id))
);
