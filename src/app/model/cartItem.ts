import {Product} from './product';

export class CartItem {
  itemTotal: number = this.product.price * this.quantity;
  constructor(public product: Product,
              public quantity: number) {}
}
