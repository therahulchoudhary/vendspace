import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/middlewayer/contacts.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  allcontacts : any[] = [];
  constructor(private contactService : ContactsService) { }

  ngOnInit() {
    this.fetchAllContacts();
  }
  deleteContact(value){
    this.contactService.contactdata(value,'deletecontact').subscribe(data=>{
      this.fetchAllContacts();
      console.log(data);
    });
  }
  fetchAllContacts(){
    this.contactService.contactdata(null,'getcontact').subscribe(data=>{
      this.allcontacts =data.body; 
      console.log(this.allcontacts);
    });
  }
}
