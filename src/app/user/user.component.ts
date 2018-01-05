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

  addPost(input: HTMLElement) {

  }

  ngOnInit() {
    this.service.getAll().subscribe((response: Array<any>) => {
      response.push({ id: 123, name: 'invalid URL', email: 'invalid@test.com' });
      this.users = response;
    });
  }

}
