import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor( public  cartservice: CartServiceService) {}

  ngOnInit(): void {
  }

}
