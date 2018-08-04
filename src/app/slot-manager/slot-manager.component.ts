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
    this.slots.push(new Slot('Value ' + (this.slots.length + 1), '', 10, 10));
  }

}

export class Slot {
  name: String;
  room: String;
  size: number;
  avialable: number;

  constructor(name: string, room: string, size: number, available: number) {
    this.name = name;
    this.room = room;
    this.size = size;
    this.avialable = available;
  }

}
