import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.css']
})
export class UtilsComponent implements OnInit {

  input: number;
  constructor() { }

  ngOnInit() {
  }
  trigger() {
    console.log('trigger invoked');
  }

}
