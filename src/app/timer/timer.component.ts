import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  timerSubscription: Subscription;
  @Input() duration: number;
  displayTime: Date;

  @Output('trigger') trigger = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    localStorage.setItem('currentTime', (this.duration||0).toString());
    this.updateTime();
  }

  updateTime() {
    this.displayTime = new Date(null);
    this.displayTime.setSeconds(+localStorage.getItem('currentTime'));
  }

  get timer() {
    let mins = this.displayTime.getUTCMinutes();
    let secs = this.displayTime.getUTCSeconds();
    return ((mins < 10) ? "0" + mins : mins) + ':' + ((secs < 10) ? "0" + secs : secs);
  }

  start() {
    this.resetSubscription();
    this.oberserableTimer();
  }

  pause() {
    this.resetSubscription();
  }

  reset($event) {
    if($event > 3599) this.duration = 3599;
    localStorage.setItem('currentTime', (this.duration||0).toString());
    this.resetSubscription();
    this.updateTime();
  }

  resetSubscription() {
    if (this.timerSubscription)
      this.timerSubscription.unsubscribe();
  }

  oberserableTimer() {
    const source = timer(0, 1000);
    // let duration = localStorage.getItem('currentTime') || 0;
    this.timerSubscription = source.subscribe(val => {
      let countdown = +localStorage.getItem('currentTime') - 1;
      if(countdown <= 0) {
        this.triggerEvent();
      } else {
        localStorage.setItem('currentTime', countdown.toString());
        this.updateTime();
      }
    });
  }

  triggerEvent() {
    this.resetSubscription();
    this.trigger.emit();
  }

  ngOnDestroy() {
    this.resetSubscription();
  }

}
