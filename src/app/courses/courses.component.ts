import { CoursesServcie } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title:string="Course List";
  buttonStr:String="Property binding";
  primaryBtn:boolean= true;
  eventStatus:String="";
  counter:number=0;

  courses:Array<String>;

  constructor(service: CoursesServcie) {
    this.courses = service.getCourses();
   }

   btnClicked(){
     this.eventStatus = "Button clicked : ".concat((this.counter++).toString());
   }

   keyPressed($event){
    this.eventStatus="Key Pressed : ".concat($event.keyCode);
   }
   

  ngOnInit() {
  }

}
