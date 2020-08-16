import {Product} from './product';

export class CartItem {
  constructor(public product: Product,
              public quantity: number) {}

  itemTotal() {
    return this.quantity * this.product.price;
  }
}
