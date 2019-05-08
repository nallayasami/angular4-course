import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  @ViewChild('textArea') textArea: ElementRef;
  
  bluePrint: any;
  seats: number = 1;
  constructor(private client: HttpClient, ) { }

  ngOnInit() {
    this.client.get('./assets/ticket.json')
      .subscribe(v => {
        this.textArea.nativeElement.textContent = JSON.stringify(v,null, 2);
        this.bluePrint = v;
      });

  }

  onChnge($event){
    this.seats = $event.target.value;
  }

  onLayoutChange($event) {
    this.bluePrint = JSON.parse($event.target.value);
  }

}
