import { Component } from '@angular/core';
import {Product} from './model/product';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';
import { finalize } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'webstore-app';
  product: Product;
  greeting = {};

  constructor(private http: HttpClient, private router: Router) {
  }
}
