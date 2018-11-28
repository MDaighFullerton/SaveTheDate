import { Component, ViewChild, OnInit } from '@angular/core';
import { EventInfoComponent } from '../event-info/event-info.component';
import { SendEmailComponent } from '../send-email/send-email.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  @ViewChild(EventInfoComponent) eventInfoComponent: EventInfoComponent;
  // @ViewChild('EmailTemplateComponent') emailTemplateComponent: EmailTemplateComponent;
  @ViewChild(SendEmailComponent) sendEmailComponent: SendEmailComponent;

  get eventInfoForm() {
     return this.eventInfoComponent ? this.eventInfoComponent.eventInfoForm : null;
  }

  // get emailTemplateForm() {
  //    return this.emailTemplateComponent ? this.emailTemplateComponent.emailTemplate : null;
  // }

  get sendEmailForm() {
     return this.sendEmailComponent ? this.sendEmailComponent.sendEmailForm : null;
  }

  constructor() { }

  ngOnInit() {
  }

}
