import { CoursesServcie } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title:string = "Course List";
  courses:Array<String>;

  constructor(service: CoursesServcie) {
    this.courses = service.getCourses();
   }

  ngOnInit() {
  }

}
