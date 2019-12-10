import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  property: string;

  constructor() { }
  ngOnInit() {
    this.property = '';
  }

  get summary() {
    const matches = this.property.match(/[\w\d\’\'-]+/gi);
    return matches ? matches.length : 0;
  }

}
