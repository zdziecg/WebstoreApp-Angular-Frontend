import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user = new User();
  msg = '';

  constructor(private userservice: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    this.userservice.registerUser(this.user).subscribe(
      data => {
        console.log(this.user);
        this.msg = 'Register succes, check your mail to confirm'
        this.router.navigateByUrl('/products');
      },
      error => console.log('error')
    );
  }
}
