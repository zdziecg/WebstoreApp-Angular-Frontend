import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showMsg = false;
  user = new User();
  msg = '';
  registerForm: FormGroup;
  submitted = false;
  constructor(private userservice: UserServiceService, private router: Router, private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required,
        this.validateUserNameNotTaken.bind(this)
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
    mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  validateUserNameNotTaken(control: AbstractControl) {
    return this.userservice.checkUserNamed(control.value).map(res => {
      return !res ? null : { userNameTaken: true };
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  registerUser() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.userservice.registerUser(this.user).subscribe(
      data => {
        console.log(this.user);
        this.msg = 'Register succes, check your mail to confirm';
        this.showMsg = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 6000);
      },
      error => console.log('error')
    );
  }
}
