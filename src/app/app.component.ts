import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$!: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
    this.signedin$ = this.authService.signedin$;
  }
}
