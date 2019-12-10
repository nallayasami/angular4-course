import { ConfirmMessageService, ConfrimMessage } from './../../servcie/confirm-message.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {
  visible: boolean;
  message: ConfrimMessage;
  subscription: Subscription;
  constructor(private router: Router, private messageServcie: ConfirmMessageService) {

  }

  ngOnInit() {
    this.subscription = this.messageServcie.serviceState
      .subscribe((res: ConfrimMessage) => {
        this.message = res;
        this.showDialog();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onHide() {
    const url = this.message.navigation;
    this.visible = false;
    this.message = null;
    this.router.navigate(['/redirect'], { queryParams: { url: url } });
  }

  private showDialog() {
    this.visible = true;
  }

}
