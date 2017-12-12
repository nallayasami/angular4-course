import { MessageServiceService } from './common/service/message-service.service';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { ServiceStatusService } from './common/service/service-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isPending: boolean;
  msgs: Message[] = [];

  constructor(private serviceStatus: ServiceStatusService,
    private message: MessageServiceService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.serviceStatus.serviceState.subscribe(state => {
      console.log('state', state);
      this.isPending = state;
      this.cdr.detectChanges();
    });
    this.message.message.subscribe(state => {
      console.log('state msg', state);
      if (state) {
        this.msgs.push(state);
      }
      this.cdr.detectChanges();
    });
  }

}
