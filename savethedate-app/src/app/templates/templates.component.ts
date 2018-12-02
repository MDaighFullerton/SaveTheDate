import { Component, OnInit } from '@angular/core';
import { InviteTemplates } from '../templates/invite-templates';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  /*Invite test templates */
  firstName: string;
  lastName: string;
  id: number;
  eventTitle: string;
  eventLocation: string;
  info: object;
  empList: Array<InviteTemplates> = [];
  // const listOfInvite: InviteTemplates[] = [this.inviteOne, this.inviteTwo, this.inviteThree];
  constructor() {}

  ngOnInit() {
    console.log('init template');
    /*create the template here*/
    const inviteOne = new InviteTemplates();
    inviteOne.id = 1;
    inviteOne.info.firstName = 'Andre';
    inviteOne.info.lastName = 'Ho';
    inviteOne.info.eventTitle = 'Liam Birthday';
    inviteOne.info.eventLocation = 'Yorba Linda, CA';
    this.empList.push(inviteOne);
    console.log('the list of invite templates', this.empList);

    // inviteOne: InviteTemplates = {
    //   id: 1,
    //   info: {
    //     firstName: 'Andre',
    //     lastName: 'Ho',
    //     eventTitle: 'Liam Birthday',
    //     eventLocation: 'Yorba Linda, CA'
    //   }
    // };
    // inviteTwo: InviteTemplates = {
    //   id: 1,
    //   info: {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     eventTitle: 'John Birthday',
    //     eventLocation: 'Orange, CA'
    //   }
    // };
    // inviteThree: InviteTemplates = {
    //   id: 1,
    //   info: {
    //     firstName: 'Jane',
    //     lastName: 'Doe',
    //     eventTitle: 'Jane Birthday',
    //     eventLocation: 'Los Angeles, CA'
    //   }
    // };
    //console.log('invite one', this.inviteOne);
  }

}

// export class TemplatesComponent {
//   title = 'Tour of Heroes';
//   myHero = 'Windstorm';
// }
