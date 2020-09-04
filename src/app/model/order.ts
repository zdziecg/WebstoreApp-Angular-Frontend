import {Injectable} from '@angular/core';
import {CartServiceService} from '../services/cart-service.service';
import {ProductOrders} from './product-orders';
import {Product} from './product';
import {CartItem} from './cartItem';


@Injectable()
export class Order {
  public id: number;
  public dateCreated: string;
  public status: string;
  public orderProducts: CartItem [];
  public totalOrderPrice: number;
  public numberOfProducts: number;


}
