import { UserService } from './../common/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService, private route: ActivatedRoute) { }

  users: Array<any>;

  addPost(input: HTMLElement) {

  }

  ngOnInit() {
    this.service.getAll().subscribe((response: Array<any>) => {
      response.push({ id: 123, name: 'invalid URL', email: 'invalid@test.com' });
      this.users = response;
    });

    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: "smooth" });
      }
    });
  }

}
