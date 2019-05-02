var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var SlotManagerComponent = /** @class */ (function () {
    function SlotManagerComponent(fb) {
        this.fb = fb;
        this.fg = fb.group({ 'slots': fb.array([]) });
    }
    SlotManagerComponent.prototype.ngOnInit = function () {
        this.competition = 'competitionId';
        this.event = 'eventId';
    };
    SlotManagerComponent.prototype.addSlot = function () {
        this.slots.push(this.createSlot());
        this.updateSlotCount();
    };
    SlotManagerComponent.prototype.createSlot = function () {
        return this.fb.group({
            // 'name': this.fb.control({ value: 'slot', disabled: true }, []),
            'room': this.fb.control('', []),
            'time': this.fb.control('', []),
            'total': this.fb.control(10, []),
            'available': this.fb.control({ value: 10, disabled: true }, []),
            'event': this.fb.control(this.event),
            'competition': this.fb.control(this.competition)
        });
    };
    SlotManagerComponent.prototype.onTotalChange = function ($event, index) {
        this.slots.controls[index].get('available').setValue($event.target.value);
        this.updateSlotCount();
    };
    SlotManagerComponent.prototype.delete = function (index) {
        this.slots.controls.splice(index, 1);
        this.updateSlotCount();
    };
    Object.defineProperty(SlotManagerComponent.prototype, "slots", {
        get: function () {
            return this.fg.get('slots');
        },
        enumerable: true,
        configurable: true
    });
    SlotManagerComponent.prototype.saveSlots = function () {
        this.updateSlotCount();
        console.log(this.slots.getRawValue());
    };
    SlotManagerComponent.prototype.updateSlotCount = function () {
        var _this = this;
        this.total = 0;
        this.available = 0;
        this.slots.getRawValue().forEach(function (slot) {
            _this.total += +slot.total;
            _this.available += +slot.available;
        });
    };
    SlotManagerComponent = __decorate([
        Component({
            selector: 'app-slot-manager',
            templateUrl: './slot-manager.component.html',
            styleUrls: ['./slot-manager.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], SlotManagerComponent);
    return SlotManagerComponent;
}());
export { SlotManagerComponent };
var Slot = /** @class */ (function () {
    function Slot(name, room, total, event, competition) {
        this.name = name;
        this.room = room;
        this.total = total;
        this.available = total;
        this.event = event;
        this.competition = competition;
    }
    return Slot;
}());
export { Slot };
//# sourceMappingURL=slot-manager.component.js.map