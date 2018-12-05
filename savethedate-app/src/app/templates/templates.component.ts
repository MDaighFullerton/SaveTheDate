import { Component, OnInit } from '@angular/core';
import { InviteTemplates } from '../templates/invite-templates';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  /*Invite test templates */
  // info: object;
  // firstName: string;
  // lastName: string;
  // id: number;
  // eventTitle: string;
  // eventLocation: string;
  // empList: Array<InviteTemplates> = [];
  // const listOfInvite: InviteTemplates[] = [this.inviteOne, this.inviteTwo, this.inviteThree];
  constructor() {}

  ngOnInit() {
    console.log('init template');
    const invite: InviteTemplates = {
      id: 1,
      info: {
        firstName: 'andre',
        lastName: 'ho',
        eventLocation: 'sdd',
        eventTitle: 'dsd'
      }
    };
    console.log('invite model', invite);

    /*create the template here*/
  }
}

