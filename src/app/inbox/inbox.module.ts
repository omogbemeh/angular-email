import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import { SharedModule } from '../shared/shared.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailReplyComponent } from './email-reply/email-reply.component';

@NgModule({
  declarations: [
    HomeComponent,
    EmailShowComponent,
    EmailIndexComponent,
    NotFoundComponent,
    EmailComposeComponent,
    EmailFormComponent,
    EmailReplyComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class InboxModule {}
