import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EmailSummaryResponse {
  id: string;
  subject: string;
  from: string;
}

export interface Email {
  id: string;
  subject: string;
  to: string;
  from: string;
  html: string;
  text: string;
}

export interface SendEmail {
  subject: string;
  text: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';
  getEmailUrl = `${this.rootUrl}/emails`;
  getAEmailUrl = `${this.rootUrl}/emails`;
  constructor(private http: HttpClient) {}
  getEmails() {
    return this.http.get<EmailSummaryResponse[]>(this.getEmailUrl);
  }

  getAEmail(id: string) {
    return this.http.get<Email>(`${this.getAEmailUrl}/${id}`);
  }

  sendEmail(input: SendEmail) {
    return this.http.post(this.getEmailUrl, input);
  }
}
