import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ServiceStatusService {

  constructor() { }

  // Observable source
  private serviceStatus = new BehaviorSubject<boolean>(false);
  // Observable stream
  serviceState = this.serviceStatus.asObservable();
  // service command
  changeState(state: boolean) {
    this.serviceStatus.next(state);
  }

}
