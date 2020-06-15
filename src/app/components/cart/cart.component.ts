import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../services/cart-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( public cartservice: CartServiceService, private router: Router) { }

  ngOnInit(): void {
  }

}
