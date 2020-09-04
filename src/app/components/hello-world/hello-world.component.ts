import { Component, OnInit } from '@angular/core';
import {HelloWordService} from '../../services/hello-world.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string;
  returnUrl: string;
  constructor(private helloWorldService: HelloWordService, private route: ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/products';

    console.log('HelloWorldComponent');
    this.helloWorldService.helloWorldService().subscribe( (result) => {
      this.message = result.content;
      setTimeout(() => {
          this.router.navigateByUrl(this.returnUrl);
        }, 2000);
    }
    );
  }

}
