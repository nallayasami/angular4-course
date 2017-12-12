import { Message } from 'primeng/primeng';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageServiceService {

  constructor() { }
  private messageStatus = new BehaviorSubject<Message>({});
  // Observable stream
  message = this.messageStatus.asObservable();
  // service command
  addMessage(message: Message) {
    this.messageStatus.next(message);
  }
}
