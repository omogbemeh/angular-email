import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.signedin$.pipe(
      skipWhile((val) => val === null),
      take(1),
      tap((val) => {
        if (val === false) this.router.navigateByUrl('/');
      })
    );
  }
}
