import { Component, OnInit, ViewChildren, ElementRef, QueryList, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  sendEmailForm: FormGroup;

  email: FormControl;

  AddEmailTo() {
    this.emailToArray.controls.push(new FormControl('', [ Validators.email ]));
    this.ref.detectChanges();
  }

  RemoveEmailTo(index) {
    this.emailToArray.removeAt(index);
  }

  constructor(private ref: ChangeDetectorRef) {
    this.sendEmailForm = new FormGroup({});
  }

  ngOnInit() {
    this.sendEmailForm = new FormGroup({
      'emailToArray': new FormArray([
        new FormControl('', [
          Validators.email,
          Validators.required
        ])
      ])
    });
  }

  get emailToArray() { return <FormArray>this.sendEmailForm.get('emailToArray'); }
}
