import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  stringVal: String = 'This a  input value';
  colSpan = 2;
  isSuccess = false;

  keyPressed($event: String) {
    console.log('Keypress' + $event);
    this.stringVal = $event;
  }

  onClick() {
    this.isSuccess = !this.isSuccess;
  }

}
