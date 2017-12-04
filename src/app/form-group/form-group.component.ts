import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  @Input('fGroup') fGroup: AbstractControl;
  @Input('controlName') controlName: string;
  @Input('alias') alias: string;
  constructor() { }

  get formControl() {
    return this.fGroup.get(this.controlName);
  }

  ngOnInit() {
  }

}
