import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../../model/order';
import {ProductOrders} from '../../model/product-orders';
import {CartServiceService} from '../../services/cart-service.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth.service';
import {OrderService} from '../../services/order.service';
import {User} from '../../model/user';
// import {OrderService} from '../../order.service';


@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  orderSent = false;
  submitted = false;

  constructor( public  cartservice: CartServiceService, private http: HttpClient,
               private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               private orderservice: OrderService) {}
  isLoggedIn = false;
  order: any;
  orders: ProductOrders;
  showMsg = false;
  user = new User();
  msg = '';
  ngOnInit(): void {

    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }


  sendOrder() {
    this.cartservice.saveOrder();
    this.cartservice.clear();
    this.msg = 'Order created';
    this.showMsg = true;
    setTimeout(() => {
      this.router.navigate(['/order']);
    }, 3000);
  }
}
