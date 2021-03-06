import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SeatInfo } from '../model/building';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input() seatInfo: SeatInfo;
  @Input() disabled: boolean;
  @Output() seatInfoChange = new EventEmitter<SeatInfo>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    if (!!this.seatInfo.eventId || (this.seatInfo.empty && this.disabled)) return;

    this.seatInfo.empty = !this.seatInfo.empty;
    this.seatInfoChange.emit(this.seatInfo);
  }

}
