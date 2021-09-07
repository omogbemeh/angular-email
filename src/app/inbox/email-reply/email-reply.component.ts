import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../services/email.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit {
  @Input() email!: Email;
  constructor(private emailService: EmailService) {}
  showModal = false;

  ngOnInit(): void {
    const { from, to, subject } = this.email;
    this.email.subject = `RE: ${subject}`;
    this.email.from = to;
    this.email.to = from;
    console.log(this.email);
  }

  onSubmit(e: Email) {
    this.emailService.sendEmail(e).subscribe(() => {
      this.showModal = false;
    });
  }
}
