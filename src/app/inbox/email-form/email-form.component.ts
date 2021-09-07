import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email, EmailService } from '../services/email.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  username!: string;
  emailForm!: FormGroup;
  @Input() email!: Email;
  @Output() emailSubmit = new EventEmitter();

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    const { to, from, subject, text } = this.email;
    this.username = this.authService.username;
    this.emailForm = new FormGroup({
      from: new FormControl({ value: from, disabled: true }),
      to: new FormControl(to, [Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  get to() {
    return this.emailForm.get('to') as FormControl;
  }

  get from() {
    return this.emailForm.get('from') as FormControl;
  }

  get subject() {
    return this.emailForm.get('subject') as FormControl;
  }

  get text() {
    return this.emailForm.get('text') as FormControl;
  }

  onSubmit() {
    if (this.emailForm.invalid) return;
    this.emailSubmit.emit(this.emailForm.value);
  }

  sendEmail() {}
}
