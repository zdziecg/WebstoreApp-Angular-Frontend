import {Product} from './product';
import {CartItem} from './cartItem';

export class Cart {
  constructor(
    public grandTotal: number,
    public cartItems: CartItem[]
              ) {}

}
