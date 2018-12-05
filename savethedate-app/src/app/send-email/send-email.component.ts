import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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

  openSnackBar() {
    if (this.sendEmailForm.valid) {
      this.snackBar.open('Sent email successfully!', '', {
        duration: 1000,
      });
    }
  }

  constructor(private ref: ChangeDetectorRef, public snackBar: MatSnackBar) {
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
