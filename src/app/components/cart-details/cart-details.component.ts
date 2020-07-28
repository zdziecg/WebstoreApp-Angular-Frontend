import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../services/cart-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  isLoggedIn = false;

  constructor( public  cartservice: CartServiceService,
               private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();

  }

}
