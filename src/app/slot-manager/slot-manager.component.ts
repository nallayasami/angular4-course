import { environment } from './../../environments/environment';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-slot-manager',
  templateUrl: './slot-manager.component.html',
  styleUrls: ['./slot-manager.component.css']
})
export class SlotManagerComponent implements OnInit {

  event: string;
  competition: string;
  total: number;
  available: number;


  // slots = [];
  fg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = fb.group({ 'slots': fb.array([]) });
  }

  ngOnInit() {
    this.competition = 'competitionId';
    this.event = 'eventId';
  }

  addSlot() {
    this.slots.push(this.createSlot());
    this.updateSlotCount();
  }

  private createSlot() {
    return this.fb.group(
      {
        // 'name': this.fb.control({ value: 'slot', disabled: true }, []),
        'room': this.fb.control('', []),
        'time': this.fb.control('', []),
        'total': this.fb.control(10, []),
        'available': this.fb.control({ value: 10, disabled: true }, []),
        'event': this.fb.control(this.event),
        'competition': this.fb.control(this.competition)
      });
  }

  onTotalChange($event, index: number) {
    this.slots.controls[index].get('available').setValue($event.target.value);
    this.updateSlotCount();
  }

  delete(index) {
    this.slots.controls.splice(index, 1);
    this.updateSlotCount();
  }

  get slots() {
    return this.fg.get('slots') as FormArray;
  }

  public saveSlots() {
    this.updateSlotCount();
    console.log(this.slots.getRawValue());
  }
  private updateSlotCount() {
    this.total = 0;
    this.available = 0;
    this.slots.getRawValue().forEach((slot: Slot) => {
      this.total += +slot.total;
      this.available += +slot.available;
    });
  }

}

export class Slot {
  name: String;
  room: String;
  time: String;
  total: number;
  available: number;
  event: string;
  competition: string;

  constructor(name: string, room: string, total: number, event: string, competition: string) {
    this.name = name;
    this.room = room;
    this.total = total;
    this.available = total;
    this.event = event;
    this.competition = competition;
  }

}
