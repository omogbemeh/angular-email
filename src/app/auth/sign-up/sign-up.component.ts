import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, SignUpCredentials } from '../services/auth.service';
import { CheckPasswords } from '../validators/check-passwords.validator';
import { CheckUserName } from '../validators/check-username.validator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private CheckUsername: CheckUserName,
    private router: Router
  ) {}
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.CheckUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    CheckPasswords.check
  );

  get username() {
    return this.authForm.get('username') as FormControl;
  }

  get password() {
    return this.authForm.get('password') as FormControl;
  }

  get passwordConfirmation() {
    return this.authForm.get('passwordConfirmation') as FormControl;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.invalid) return;
    this.signUp(this.authForm.value);
  }

  signUp(input: SignUpCredentials) {
    this.authService.signUp(input).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
    });
  }
}
