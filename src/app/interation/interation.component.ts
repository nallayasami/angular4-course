import { Component, OnInit, Inject } from '@angular/core';
import { CoursesServcie } from '../courses/courses.service';

@Component({
  selector: 'app-interation',
  templateUrl: './interation.component.html',
  styleUrls: ['./interation.component.css']
})
export class InterationComponent implements OnInit {
  courses: Array<any>;

  constructor(private service: CoursesServcie) {
    this.courses = service.getCourses();
  }
  ngOnInit() {
  }

  trackByMethod(index, item) {
    return item ? item.id : undefined;
  }

  resetData() {
    this.courses = this.service.getCourses();
  }

  delete(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
