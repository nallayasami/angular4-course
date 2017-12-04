import { CoursesServcie } from './courses.service';
import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../courseItem.eum';
import { FavoriteComponentArgs } from '../favorite/favorite.component';
import { LikeComponentArgs, LikeComponent } from '../like/like.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title: String = 'Course List';
  buttonStr: String = 'Property binding';
  primaryBtn: Boolean = true;
  eventStatus: String;
  emailId: String;
  counter = 0;
  courses: Array<String>;
  selection: CourseItem = CourseItem.RoutingAndNavigation;

  reusableComponent: FavoriteComponentArgs = { isFavorite: false };
  likeComponent: LikeComponentArgs = { isLiked: true, likeCount: 10 };

  constructor(service: CoursesServcie) {
    this.courses = service.getCourses();
  }

  btnClicked() {
    this.eventStatus = 'Button clicked : '.concat((this.counter++).toString());
  }

  keyPressed($event) {
    this.eventStatus = 'Key Pressed : '.concat($event.keyCode);
  }

  enterKeyPressed() {
    this.eventStatus = 'Key Filter event : '.concat('Enter');
  }
  templateVariable(input) {
    this.eventStatus = 'Template vaieable.value : '.concat(input);
  }

  isFavoriteChanged(changeEvent: FavoriteComponentArgs) {
    this.reusableComponent = changeEvent;
  }

  likeBtnCliked($event: LikeComponentArgs) {
    console.log($event);
    this.likeComponent = $event;
  }
  onOptionSelection($event: CourseItem) {
    this.selection = $event;
  }

  ngOnInit() {
  }

}
