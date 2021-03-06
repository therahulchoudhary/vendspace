import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import {FormService} from '../../middlewayer/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Form Validation variables
  form : FormGroup;
  registerForm: FormGroup;
  loginForm : FormGroup;
  submitted = false;

  // Form Fields variables

  fullName: boolean;
  contact: boolean;
  // registerForm = new FormGroup({
  //   fullName: new FormControl(''),
  //   age: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   contact: new FormControl('')
  // });
  constructor(private formBuilder: FormBuilder,private formService : FormService) {
    this.fullName = true;
    this.contact = true;
  }
  showFields(state: boolean) {
    this.fullName = state;
    this.contact = state;
  }
  showAuth(choice: number) {
    // this.fullName = true;
    // this.age = true;
    // this.contact = true;
    switch(choice){
      case 1:
        this.showFields(false);
        this.form = this.loginForm;
        break;
      default:
        this.showFields(true);
        this.form = this.registerForm;
        break;
    }
  }
  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem("currentUser")) === null) {
      console.log('loggedout')
      }else{
      console.log(JSON.parse(sessionStorage.getItem("currentUser")));
      }
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contact: ['',Validators.required]
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.form = this.registerForm;
    }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    console.log(JSON.stringify(this.form.value));
    // this.formService.userdata(this.registerForm.value,'adduser').subscribe(data => console.log(data));
    if(this.fullName){
      this.formService.userdata(this.form.value,'adduser').subscribe(data => {
        console.log(data);
        if(data.status){
          this.formService.sessionlogin(data.body);
        }
      });

    }
    else{
      this.formService.userdata(this.form.value,'authuser').subscribe(data => {
        console.log(data);
        if(data.status){
          this.formService.sessionlogin(data.body);
        }
      });  
    }
  }
}
