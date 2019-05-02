var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.trigger = new EventEmitter();
    }
    TimerComponent.prototype.ngOnInit = function () {
        localStorage.setItem('currentTime', (this.duration || 0).toString());
        this.updateTime();
    };
    TimerComponent.prototype.updateTime = function () {
        this.displayTime = new Date(null);
        this.displayTime.setSeconds(+localStorage.getItem('currentTime'));
    };
    Object.defineProperty(TimerComponent.prototype, "timer", {
        get: function () {
            var mins = this.displayTime.getUTCMinutes();
            var secs = this.displayTime.getUTCSeconds();
            return ((mins < 10) ? "0" + mins : mins) + ':' + ((secs < 10) ? "0" + secs : secs);
        },
        enumerable: true,
        configurable: true
    });
    TimerComponent.prototype.start = function () {
        this.resetSubscription();
        this.oberserableTimer();
    };
    TimerComponent.prototype.pause = function () {
        this.resetSubscription();
    };
    TimerComponent.prototype.reset = function ($event) {
        if ($event > 3599)
            this.duration = 3599;
        localStorage.setItem('currentTime', (this.duration || 0).toString());
        this.resetSubscription();
        this.updateTime();
    };
    TimerComponent.prototype.resetSubscription = function () {
        if (this.timerSubscription)
            this.timerSubscription.unsubscribe();
    };
    TimerComponent.prototype.oberserableTimer = function () {
        var _this = this;
        var source = timer(0, 1000);
        // let duration = localStorage.getItem('currentTime') || 0;
        this.timerSubscription = source.subscribe(function (val) {
            var countdown = +localStorage.getItem('currentTime') - 1;
            if (countdown <= 0) {
                _this.triggerEvent();
            }
            else {
                localStorage.setItem('currentTime', countdown.toString());
                _this.updateTime();
            }
        });
    };
    TimerComponent.prototype.triggerEvent = function () {
        this.resetSubscription();
        this.trigger.emit();
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        this.resetSubscription();
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "duration", void 0);
    __decorate([
        Output('trigger'),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "trigger", void 0);
    TimerComponent = __decorate([
        Component({
            selector: 'app-timer',
            templateUrl: './timer.component.html',
            styleUrls: ['./timer.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());
export { TimerComponent };
//# sourceMappingURL=timer.component.js.map