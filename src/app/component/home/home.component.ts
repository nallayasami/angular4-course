import { CourseItem } from './../../courseItem.eum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectionOptions: Array<string> = Object.keys(CourseItem).splice(Object.keys(CourseItem).length / 2, Object.keys(CourseItem).length - 1);

  constructor() { }

  ngOnInit() {
  }

}
