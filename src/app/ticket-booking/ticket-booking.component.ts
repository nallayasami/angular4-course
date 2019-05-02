import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  bluePrint: any
  constructor() { }

  ngOnInit() {
  }

  onLayoutChange($event) {
    this.bluePrint = JSON.parse($event.target.value);
  }

}
