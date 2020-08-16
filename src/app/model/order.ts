import {Injectable} from '@angular/core';
import {CartServiceService} from '../services/cart-service.service';
import {ProductOrders} from './product-orders';


@Injectable()
export class Order {
  public id: number;
  public dateCreated: string;
  public status: string;
  public orderProducts: ProductOrders;
  public totalOrderPrice: number;
  public numberOfProducts: number;

  constructor() {}


}
