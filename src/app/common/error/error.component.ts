import { AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input('fromGroup') fromGroup: AbstractControl;
  @Input('controlName') controlName: string;
  @Input('alias') alias: string;

  constructor() { }

  get formControl() {
    return this.fromGroup.get(this.controlName);
  }

  ngOnInit() {
  }

}
