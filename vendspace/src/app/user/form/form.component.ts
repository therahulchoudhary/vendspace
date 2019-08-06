import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  fullName: boolean;
  age: boolean;
  contact: boolean;
  genform = new FormGroup({
    fullName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    contact: new FormControl('')
  });
  constructor() {
    this.fullName = true;
    this.age = true;
    this.contact = true;
  }
  showFields(state: boolean) {
    this.fullName = state;
    this.age = state;
    this.contact = state;
  }
  showAuth(choice: number) {
    // this.fullName = true;
    // this.age = true;
    // this.contact = true;
    switch(choice){
      case 2:
        this.showFields(false);
        break;
      default:
        this.showFields(true);
        break;
    }
  }
  ngOnInit() {
  }
}
