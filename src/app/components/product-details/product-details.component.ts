import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../../services/product-service.service';
import {Product} from '../../model/product';
import {CartServiceService} from '../../services/cart-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(public productService: ProductServiceService, private route: ActivatedRoute, private router: Router,
              private cartservice: CartServiceService) {
  }

  ngOnInit() {
    this.productService.getProductById(this.route.snapshot.params.id).subscribe((param: {}) => {
      console.log(param);
      this.product = param;
    });
  }

  addProductToCart(product: Product) {
    this.cartservice.addLine(product);
    this.router.navigateByUrl('/cart-details');
  }
}


