import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';

export class CheckPasswords {
  static check(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password') as FormControl;
    const passwordConfirmation = control.get(
      'passwordConfirmation'
    ) as FormControl;
    if (
      password.dirty &&
      passwordConfirmation.dirty &&
      password.value !== passwordConfirmation.value
    ) {
      return { passwordsDoNotMatch: true };
    }
    return null;
  }
}
