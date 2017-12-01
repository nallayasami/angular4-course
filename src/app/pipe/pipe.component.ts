import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  pipesObject: any = {
    numberValue: 12548,
    stringValue: 'Test the bigger String with multiple char',
    date: new Date(),
    decimalVal: 124.4557,
    stringLimit: 10
  };

  constructor() { }

  ngOnInit() {
  }

}
