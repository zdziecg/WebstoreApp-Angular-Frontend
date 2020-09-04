import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './components/cart/cart.component';
import {CartDetailsComponent} from './components/cart-details/cart-details.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './authguard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {UserServiceService} from './services/user-service.service';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import {HttpInterceptorService} from './services/http-interceptor.service';
import { ImageComponent } from './components/image/image.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    HelloWorldComponent,
    MenuComponent,
    LogoutComponent,
    ImageComponent,
    OrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    // HomeRoutingModule
  ],
  exports: [ ProductsComponent, CartComponent],

  providers: [ UserServiceService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
{
}
