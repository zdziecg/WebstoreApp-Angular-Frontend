import {Injectable} from '@angular/core';
import {CartServiceService} from '../services/cart-service.service';


@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public shipped = false;

  constructor(public cartService: CartServiceService) {}

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cartService.clear();
  }
}
