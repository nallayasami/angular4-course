import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  private property: string;

  constructor() { }
  ngOnInit() {
    this.property = '';
  }

  get summary() {
    return this.property.split(' ').length - 1;
  }

}
