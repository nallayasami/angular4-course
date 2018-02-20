import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  visible = false;
  @Input() navigation: string;

  constructor(private router: Router) {
    console.log('Init');
    this.router.onSameUrlNavigation = 'reload';
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  onHide() {
    this.router.navigate([this.navigation], { queryParams: { refresh: 1 } });
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

}
