import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { ContactsService } from 'src/app/middlewayer/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private contactservice: ContactsService,public route:ActivatedRoute) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      contactor : ['',Validators.required],
      contactorEmail : ['',Validators.required],
      description : ['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.contactForm.invalid){
      return;
    }
    this.contactservice.contactdata(this.contactForm.value,'addcontact').subscribe(data=>console.log(data.body));
  }
}
