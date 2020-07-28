import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../../model/order';
// import {OrderService} from '../../order.service';


@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
  orderSent = false;
  submitted = false;

  constructor(
    // public orderService: OrderService,
              public order: Order) {}

  submitOrder(form: NgForm) {
    // this.submitted = true;
    // if (form.valid) {
    //   this.orderService.saveOrder(this.order).subscribe(order => {
    //     this.order.clear();
    //     this.orderSent = true;
    //     this.submitted = false;
    //   });
  //   }
  // }
}}
