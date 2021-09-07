import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CheckUserName implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const username = control.value;
    return this.authService.checkUsername(username).pipe(
      map(() => null),
      catchError((err) => {
        if (err.error.username) {
          return of({ usernameTaken: true });
        }
        return of({ noConnection: true });
      })
    );
  };
}
