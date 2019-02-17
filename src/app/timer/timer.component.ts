import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'ss-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  timersubscriber:Subscription;
  timer: number;

  constructor() { }

  ngOnInit() {

  }

  oberserableTimer() {
    console.log('oberserableTimer');
    const source = timer(0, 1000);
    this.timersubscriber = source.subscribe(val => {
      console.log(val, '-');
      let currentTime = localStorage.getItem('currentTime');
      this.timer = val;
    });
  }

  ngOnDestroy() {
    if(this.timersubscriber) {
      this.timersubscriber.unsubscribe();
    }
  }

}
