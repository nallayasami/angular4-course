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



/* off-canvas sidebar toggle */
// $('[data-toggle=offcanvas]').click(function() {
//   $('.row-offcanvas').toggleClass('active');
//   $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
// });


// function onElementHeightChange(elm, callback){
// 	var lastHeight = elm.clientHeight, newHeight;
// 	(function run(){
// 		newHeight = elm.clientHeight;
// 		if( lastHeight != newHeight )
// 			callback();
// 		lastHeight = newHeight;

//         if( elm.onElementHeightChangeTimer )
//           clearTimeout(elm.onElementHeightChangeTimer);

// 		elm.onElementHeightChangeTimer = setTimeout(run, 200);
// 	})();
// }


// onElementHeightChange(document.body, function(){
//   alert('Body height changed');
// });


// to clear the timer use:
// clearTimeout(document.body.onElementHeightChangeTimer);
