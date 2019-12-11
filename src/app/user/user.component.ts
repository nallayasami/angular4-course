import { UserService } from './../common/service/user.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private service: UserService, private route: ActivatedRoute) { }

  users: Array<any>;
  aboutSubscription: Subscription;

  @ViewChild('about', { static: true }) about: ElementRef;
  addPost(input: HTMLElement) {

  }

  ngOnInit() {
    this.service.getAll().subscribe((response: Array<any>) => {
      response.push({ id: 123, name: 'invalid URL', email: 'invalid@test.com' });
      this.users = response;
    });
    this.aboutSubscription = this.route.fragment.subscribe((fragment: string) => {
      this.focusToFragment();
    });
  }
  focusToFragment(): void {
    const fragment = this.route.snapshot.fragment;
    console.log('fragment:', fragment);
    if ('about' === fragment) {
      this.about.nativeElement.scrollIntoView();
    }
  }
  ngOnDestroy() {
    if(this.aboutSubscription) {
      this.aboutSubscription.unsubscribe();
    }
  }
}
