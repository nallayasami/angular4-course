import { MessageServiceService } from './../common/service/message-service.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from './../common/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private service: UserService, private router: ActivatedRoute, private messageService: MessageServiceService) { }

  get name() {
    return this.user.name;
  }
  get email() {
    return this.user.email;
  }

  ngOnInit() {
    /*can be used but not updated on same component rerender
    this.router.snapshot*/
    Observable.combineLatest([this.router.paramMap])
      .switchMap((paramMap) => {
        return this.service.get(paramMap[0].get('userId'));
      }).subscribe(output => {
        this.user = output;
        this.messageService.addMessage({ severity: 'success', summary: 'Used Loaded ', detail: 'User loaded successfully' });
      });
    // this.router.paramMap.subscribe((value) => {
    //   this.service.get(value.get('userId')).subscribe((output) => {
    //   });
    // });
  }

}
