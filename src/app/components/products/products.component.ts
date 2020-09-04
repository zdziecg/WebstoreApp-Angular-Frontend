import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product-service.service';
import {Router} from '@angular/router';
import {CartServiceService} from '../../services/cart-service.service';
import {Product} from '../../model/product';
import {ImageService} from '../../services/image.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  products: any;
  product: Product;
  private id: number;
  private productId = 0;
  private cat: string;
  public productsPerPages = 6;
  public selectedPage = 1;
  config: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  collection = { count: 10, products: [] };
  private imageName: string;
  constructor(private productService: ProductServiceService, private cartservice: CartServiceService, private router: Router,
              private imageService: ImageService,
              private httpClient: HttpClient
              ) {
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.products.push(
        {
          id: i + 1,
          value: 'items number ' + (i + 1)
        }
      );
    }
    // http.get('resource').subscribe(data => this.greeting = data);

    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.products
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(value => {
        this.products = value;
      }
    );
  }
  getProductsByCategory(cat: string) {
    this.productService.getProductsByCategory(cat).subscribe(
      value => {
        console.log(value);
        this.products = value;
      }
    );
    this.pageChanged(event); {
      this.config.currentPage = 1;
    }
  }
  addProductToCart(product: Product) {
    this.cartservice.addLine(product);
    this.router.navigateByUrl('/cart-details');
  }
  getImages(name: string) {
    this.imageService.getImageByName(name + '.JPG').subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
      );
  }

  getImage(product: Product) {
    this.httpClient.get('http://localhost:7776/image/get/' + product.productId + '.JPG')
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
  // authenticated() { return this.app.authenticated; }

}
