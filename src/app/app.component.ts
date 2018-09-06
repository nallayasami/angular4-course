import { MessageService } from 'primeng/components/common/messageservice';
import { MessageServiceService } from './common/service/message-service.service';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { ServiceStatusService } from './common/service/service-status.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  isPending: boolean;
  msgs: Message[] = [];

  constructor(private serviceStatus: ServiceStatusService,
    private message: MessageServiceService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.serviceStatus.serviceState.subscribe(state => {
      this.isPending = state;
      this.cdr.detectChanges();
    });
    this.message.message.subscribe(state => {
      // console.log('state msg', state);
      if (state) {
        this.msgs.push(state);
        const msgAry = this.msgs;
        setTimeout(() => {
          msgAry.splice(msgAry.indexOf(state), 1);
        }, 3000);
        // this.messageService.add({})
      }
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
  }

}
