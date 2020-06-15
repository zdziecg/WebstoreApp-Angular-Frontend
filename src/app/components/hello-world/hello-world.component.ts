import { Component, OnInit } from '@angular/core';
import {HelloWordService} from '../../hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string;

  constructor(private helloWorldService: HelloWordService) { }

  ngOnInit() {

    console.log('HelloWorldComponent');
    this.helloWorldService.helloWorldService().subscribe( (result) => {
      this.message = result.content;
    });
  }

}
