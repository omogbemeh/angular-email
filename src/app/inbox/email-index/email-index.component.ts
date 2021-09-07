import { Component, OnInit } from '@angular/core';
import { EmailService, EmailSummaryResponse } from '../services/email.service';
@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emailSummaries!: EmailSummaryResponse[];
  constructor(private emailService: EmailService) {}
  ngOnInit(): void {
    this.getEmails();
  }
  getEmails() {
    this.emailService
      .getEmails()
      .subscribe((res) => (this.emailSummaries = res));
  }
}
