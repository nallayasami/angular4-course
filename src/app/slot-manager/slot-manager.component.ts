import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-manager',
  templateUrl: './slot-manager.component.html',
  styleUrls: ['./slot-manager.component.css']
})
export class SlotManagerComponent implements OnInit {

  slots = [];
  constructor() { }

  ngOnInit() {
  }

  addSlot() {
    this.slots.push(new Slot('Slot ' + (this.slots.length + 1), '', 10));
  }

  delete(i) {
    this.slots.splice(i, 1);
    this.slots.forEach((val: Slot, index: number) => {
      val.name = 'slot ' + (index + 1);
    });
  }

  get available() {
    let total = 0;
    this.slots.forEach((val: Slot, index: number) => {
      total += val.total;
    });
    return total;
  }

}

export class Slot {
  name: String;
  room: String;
  total: number;
  available: number;

  constructor(name: string, room: string, total: number) {
    this.name = name;
    this.room = room;
    this.total = total;
    this.available = total;
  }

}
