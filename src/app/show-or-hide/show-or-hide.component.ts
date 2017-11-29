import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-or-hide',
  templateUrl: './show-or-hide.component.html',
  styleUrls: ['./show-or-hide.component.css']
})
export class ShowOrHideComponent implements OnInit {

  isSelected = true;

  constructor() { }

  ngOnInit() {
  }

}
