import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../services/cart-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth.service';
import {Product} from '../../model/product';
import {OrderService} from '../../services/order.service';
import {ProductOrders} from '../../model/product-orders';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../model/order';
import {CartItem} from '../../model/cartItem';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  constructor( public  cartservice: CartServiceService, private http: HttpClient,
               private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               ) {}
  isLoggedIn = false;

  ngOnInit(): void {

    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }
  sendOrder() {
    this.cartservice.saveOrder();
    this.cartservice.clear();
  }
}
