import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swich-options',
  templateUrl: './swich-options.component.html',
  styleUrls: ['./swich-options.component.css']
})
export class SwichOptionsComponent implements OnInit {

  currentMode:String = 'someValue'

  constructor() { }

  ngOnInit() {
  }

}
