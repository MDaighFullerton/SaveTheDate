import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  eventInfoForm: FormGroup;

  constructor() {
    this.eventInfoForm = new FormGroup({});
   }

  ngOnInit() {
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
}
