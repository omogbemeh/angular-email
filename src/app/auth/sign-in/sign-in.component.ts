import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInCredentials } from '../services/auth.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  get username() {
    return this.authForm.get('username') as FormControl;
  }

  get password() {
    return this.authForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.authForm.invalid) return;
    this.signin(this.authForm.value);
  }

  signin(input: SignInCredentials) {
    this.authService.signIn(input).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: (err) => {
        if (!err.status) return this.authForm.setErrors({ noConnection: true });
        if (err.error)
          return this.authForm.setErrors({ invalidCredentials: true });
        else return this.authForm.setErrors({ unknown: true });
      },
    });
  }
  ngOnInit(): void {}
}
