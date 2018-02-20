import { ConfirmMessageService, ConfrimMessage } from './../servcie/confirm-message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-dialog',
  templateUrl: './prime-dialog.component.html',
  styleUrls: ['./prime-dialog.component.css']
})
export class PrimeDialogComponent implements OnInit {

  message: string = 'Welcome';
  navigate: string = '/';
  constructor(private messageService: ConfirmMessageService) { }

  ngOnInit() {
  }

  addMessage() {
    this.messageService.addMessage(new ConfrimMessage(this.message, this.navigate));
  }

}
