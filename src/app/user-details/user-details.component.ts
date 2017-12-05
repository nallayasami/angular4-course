import { UserService } from './../common/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private service: UserService, private router: ActivatedRoute) { }

  get name(){
    return this.user.name;
  }
  get email(){
    return this.user.email;
  }

  ngOnInit() {
    /*not updated on same component rerender
    this.router.snapshot*/
    this.router.paramMap.subscribe((value) => {
      console.log(value.get('userId'));
      this.service.get(value.get('userId')).subscribe((output) => {
        console.log(output);
        this.user = output;
        console.log(this.user);
      });
    });
  }

}
