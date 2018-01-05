import { CourseItem } from './../courseItem.eum';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input('selection') selection: CourseItem;
  @Output('onClick') onClick = new EventEmitter();

  selectionOptions: Array<string> = Object.keys(CourseItem).splice(Object.keys(CourseItem).length / 2, Object.keys(CourseItem).length - 1);

  ngOnInit() {
  }

  onClicked(selection: CourseItem) {
    this.selection = selection;
    this.onClick.emit(CourseItem[selection]);
  }

  isSelected(option: string): boolean {
    return CourseItem[option] === this.selection;
  }

  getSelectionStr() {
    return CourseItem[this.selection];
  }
}
