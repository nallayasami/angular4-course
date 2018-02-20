import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ConfirmMessageService {

  constructor() { }

  // Observable source
  private serviceStatus = new BehaviorSubject<ConfrimMessage>(null);
  // Observable stream
  serviceState = this.serviceStatus.asObservable();
  // service command
  addMessage(message: ConfrimMessage) {
    this.serviceStatus.next(message);
  }

}

export class ConfrimMessage {
  constructor(public message: string, public navigation?: string, public severity: string = 'info') { }
}
