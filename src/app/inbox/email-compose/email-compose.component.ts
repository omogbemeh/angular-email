import { Component, OnInit } from '@angular/core';
import { Email, EmailService } from '../services/email.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.css'],
})
export class EmailComposeComponent implements OnInit {
  displayModal = false;
  email: Email = {
    id: '',
    from: `${this.authService.username}@angular-email.com`,
    to: '',
    subject: '',
    text: '',
    html: '',
  };
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {}

  onSubmit(e: any) {
    this.emailService.sendEmail(e).subscribe(() => {
      this.displayModal = false;
    });
  }
}
