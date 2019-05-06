import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Floor, SeatInfo } from '../model/building';

@Component({
  selector: 'app-builing-layout',
  templateUrl: './builing-layout.component.html',
  styleUrls: ['./builing-layout.component.css']
})
export class BuilingLayoutComponent implements OnInit {


  _bluePrint: Floor[];
  @Output() bluePrintChange = new EventEmitter();
  @Input() reservationCount;
  availableSeats: number = 0;
  selected: string[];

  constructor() { }

  ngOnInit() {
    this.calculateAvailable();
  }

  @Input()
  get bluePrint() {
    return this._bluePrint;
  }
  set bluePrint(bluePrint: Floor[]) {
    this._bluePrint = bluePrint;
    this.calculateAvailable();
  }

  calculateAvailable() {
    this.availableSeats = 0;
    this.selected = [];
    if (this.bluePrint) {
      this.bluePrint.filter(f => f.active)
        .forEach(
          f => f.seatInfos.filter(s => s.eventId == null && s.seatNo != 0)
            .forEach(s => {
              if (s.empty) {
                this.availableSeats++;
              } else {
                this.selected.push(s.seatNo + "");
              }
            })
        );
    }
  }

  onChange($event) {
    this.calculateAvailable();
  }

}
