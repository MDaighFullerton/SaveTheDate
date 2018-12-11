import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { EventInfoComponent } from '../event-info/event-info.component';
import {MatCardModule} from '@angular/material/card';



  @Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements AfterViewInit {
  @Input() data;
  showAlert() {
    // this.alert.lastName();
    // console.log('sss', this.child.eventInfoForm);
    // window.alert('show alert', this.eventInfoForm.value.email);
    console.log('call get', this.data);
  }
  // InfoModel: any;
  // eventInfoForm: FormGroup;
  constructor() {}
  ngAfterViewInit() {
    console.log('call get', this.data);
  }
}
