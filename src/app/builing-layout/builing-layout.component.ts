import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Floors } from '../model/building';

@Component({
  selector: 'app-builing-layout',
  templateUrl: './builing-layout.component.html',
  styleUrls: ['./builing-layout.component.css']
})
export class BuilingLayoutComponent implements OnInit {


  @Input() bluePrint:Floors[];
  @Output() bluePrintChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
