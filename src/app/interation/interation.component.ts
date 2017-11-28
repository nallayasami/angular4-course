import { Component, OnInit } from '@angular/core';
import { CoursesServcie } from '../courses/courses.service';

@Component({
  selector: 'app-interation',
  templateUrl: './interation.component.html',
  styleUrls: ['./interation.component.css']
})
export class InterationComponent implements OnInit {
  courses: Array<String>;

  constructor(service: CoursesServcie) {
    this.courses = service.getCourses();
  }
  ngOnInit() {
  }

}
