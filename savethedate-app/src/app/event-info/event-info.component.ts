import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoModel } from './infoModel';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css'],
})
export class EventInfoComponent implements OnInit {
  eventInfoForm: FormGroup;
  infoEvent: InfoModel;
  constructor() {
    this.eventInfoForm = new FormGroup({});
  }
  ngOnInit() {
    console.log('init even-info');
    this.eventInfoForm = new FormGroup({
      'email': new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      'firstName': new FormControl('', [
        Validators.required
      ]),
      'lastName': new FormControl('', [
        Validators.required
      ]),
      'subject': new FormControl('', [
        Validators.required
      ]),
      'address': new FormControl('', [
        Validators.required
      ]),
      'city': new FormControl('', [
        Validators.required
      ]),
      'state': new FormControl('', [
        Validators.required
      ]),
      'zip': new FormControl('', [
        Validators.required
      ])
    });
  }
  get email() { return this.eventInfoForm.get('email'); }
  get firstName() { return this.eventInfoForm.get('firstName'); }
  get lastName() { return this.eventInfoForm.get('lastName'); }
  get subject() { return this.eventInfoForm.get('subject'); }
  get address() { return this.eventInfoForm.get('address'); }
  get city() { return this.eventInfoForm.get('city'); }
  get state() { return this.eventInfoForm.get('state'); }
  get zip() { return this.eventInfoForm.get('zip'); }
  // form1() {
  //   // map to model?
  //   const userInfo: InfoModel = {
  //     email: this.eventInfoForm.value.email,
  //     firstName: this.eventInfoForm.value.firstName,
  //     lastName: this.eventInfoForm.value.lastName,
  //     subject: this.eventInfoForm.value.subject,
  //     address: this.eventInfoForm.value.address,
  //     city: this.eventInfoForm.value.city,
  //     state: this.eventInfoForm.value.state,
  //     zip: this.eventInfoForm.value.zip
  //   };
  //   console.log('save to model', userInfo);
  // }
}

