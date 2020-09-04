import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth.service';
import {UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn = false;
  loggeduser = sessionStorage.getItem('id')
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService, private userService: UserServiceService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }
  handleLogout() {
    this.authenticationService.logout();
  }
}
