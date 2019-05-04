import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Floor } from '../model/building';

@Component({
  selector: 'app-builing-layout',
  templateUrl: './builing-layout.component.html',
  styleUrls: ['./builing-layout.component.css']
})
export class BuilingLayoutComponent implements OnInit {


  @Input() bluePrint: Floor[];
  @Output() bluePrintChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get columnSize() {
    return (this.bluePrint) ? new Array(this.bluePrint[0].seatInfos.length) : [];
  }

}
