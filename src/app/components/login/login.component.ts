import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {AuthenticationService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  private user: User;
  returnUrl: string;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  ngOnInit() {
    this.authenticationService.logout();

    sessionStorage.setItem('token', '');
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/hello-world';


  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      sessionStorage.setItem('token', btoa(this.username + ':' + this.password));
      setTimeout(() => {
        this.router.navigate(['/hello-world']);
      }, 1000);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
  login() {
    const url = 'http://localhost:7776/basicauth';
    this.http.post<Observable<boolean>>(url, {
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa(this.user.username + ':' + this.user.password));
        this.router.navigateByUrl(this.returnUrl);
      } else {
        alert('Authentication failed.');
      }
    });
  }

}



