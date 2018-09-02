import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-slot-manager',
  templateUrl: './slot-manager.component.html',
  styleUrls: ['./slot-manager.component.css']
})
export class SlotManagerComponent implements OnInit {

  // slots = [];
  fg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = fb.group({ 'slots': fb.array([]) });
  }

  ngOnInit() {
  }

  addSlot() {
    this.slots.push(this.createSlot());
    // this.slots.push(new Slot('Slot ' + (this.slots.length + 1), '', 10));
  }

  private createSlot() {
    return this.fb.group(
      {
        'name': this.fb.control({ value: 'slot', disabled: true }, []),
        'room': this.fb.control('', []),
        'time': this.fb.control('', []),
        'total': this.fb.control(10, []),
        'available': this.fb.control({ value: 10, disabled: true }, [])
      });
  }

  delete(i) {
    this.slots.controls.splice(i, 1);
    // this.slots.forEach((val: Slot, index: number) => {
    //   val.name = 'slot ' + (index + 1);
    // });
  }

  get available() {
    let total = 0;
    // this.slots.forEach((val: Slot, index: number) => {
    //   total += val.total;
    // });
    return total;
  }

  get slots() {
    return this.fg.get('slots') as FormArray;
  }

  public saveSlots() {
    console.log(this.slots.value);
  }

}

export class Slot {
  name: String;
  room: String;
  time: String;
  total: number;
  available: number;

  constructor(name: string, room: string, total: number) {
    this.name = name;
    this.room = room;
    this.total = total;
    this.available = total;
  }

}
