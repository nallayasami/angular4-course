import { UserService } from './../common/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService) { }

  users: Array<any>;

  ngOnInit() {
    this.service.getAll().subscribe((response) => {
      this.users = response;
    });
  }

}
