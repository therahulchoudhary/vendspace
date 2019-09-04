import { Component, OnInit } from '@angular/core';
import { FormService } from '../../middlewayer/form.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allusers : any[] = [];
  constructor(private formservice : FormService) { }

  ngOnInit() {
    this.fetchAllUsers();
  }
  deleteUser(value){
    this.formservice.userdata(value,'deleteuser').subscribe(data=>{
      this.fetchAllUsers();
      console.log(data.body);
    });
  }
  fetchAllUsers(){
    this.formservice.userdata(null,'getallusers').subscribe(data=>{
      this.allusers =data.body; 
      console.log(this.allusers);
    });
  }
}
