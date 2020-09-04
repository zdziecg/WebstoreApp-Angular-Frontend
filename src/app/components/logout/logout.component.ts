import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  returnUrl: string;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/products';
    setTimeout(() => {
      this.router.navigateByUrl(this.returnUrl);
    }, 2000);
  }

}
