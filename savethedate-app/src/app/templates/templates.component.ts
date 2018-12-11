import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { EventInfoComponent } from '../event-info/event-info.component';
import { InviteTemplates } from './templateModel';
import { InfoModel } from '../event-info/infoModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// import { userInfo } from 'os';

  @Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  // @ViewChild(EventInfoComponent) child: EventInfoComponent;
  @Input() data;
  @ViewChild(EventInfoComponent, {read: 'emailProvider'}) emailStuff: string;
  showAlert() {
    // this.alert.lastName();
    // console.log('sss', this.child.eventInfoForm);
    // window.alert('show alert', this.eventInfoForm.value.email);
    console.log('data: ' + this.data);
    console.log('call get', this.emailStuff);
  }
  // InfoModel: any;
  // eventInfoForm: FormGroup;
  constructor() {}
  ngOnInit() {
    console.log('data: ' + this.data);
    console.log('init template');
    // console.log('getting info model');
    // const invite: InviteTemplates = {
    //   id: 1,
    //   info: {
    //     firstName: 'andre',
    //     lastName: 'ho',
    //     eventLocation: 'sdd',
    //     eventTitle: 'dsd'
    //   }
    // };
    // console.log('invite model', invite);
    console.log('from step 1', );
    // this.eventInfoForm = this._formBuilder.group({
    //   email: ['', Validators.required]
    // });
    // console.log('dddd', this.eventInfoForm.value);
    /*create the template here*/
  }
  // get email() { return this.eventInfoForm.get('email'); }
  onClickMe() {
    // console.log('from 1', this.InfoModel.firstName);
  }
}
