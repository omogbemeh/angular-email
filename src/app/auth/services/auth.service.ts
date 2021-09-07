import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface SignInCredentials {
  username: string;
  password: string;
}

export interface CheckAuthResponse {
  authenticated: boolean;
  username: string;
}

export interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignInResponse {
  username: string;
}

export interface SignUpResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username!: string;
  signedin$ = new BehaviorSubject<any>(null);
  private rootUrl = 'https://api.angular-email.com';
  private signUpUrl = `${this.rootUrl}/auth/signup`;
  private signInUrl = `${this.rootUrl}/auth/signin`;
  private signOutUrl = `${this.rootUrl}/auth/signout`;
  private checkAuthUrl = `${this.rootUrl}/auth/signedin`;

  checkUsernameUrl = `${this.rootUrl}/auth/username`;
  constructor(private http: HttpClient) {}
  signUp(input: SignUpCredentials) {
    return this.http
      .post<SignUpResponse>(this.signUpUrl, input)
      .pipe(tap(() => this.signedin$.next(true)));
  }

  checkUsername(username: string) {
    return this.http.post(this.checkUsernameUrl, username);
  }

  signIn(input: SignInCredentials) {
    return this.http.post<SignInResponse>(this.signInUrl, input).pipe(
      tap((value) => {
        this.signedin$.next(true);
        this.username = value.username;
      })
    );
  }

  checkAuth() {
    return this.http.get<CheckAuthResponse>(this.checkAuthUrl).pipe(
      tap((val) => {
        this.signedin$.next(val.authenticated);
        this.username = val.username;
      })
    );
  }

  signout() {
    return this.http
      .post(this.signOutUrl, {})
      .pipe(tap(() => this.signedin$.next(false)));
  }
}
