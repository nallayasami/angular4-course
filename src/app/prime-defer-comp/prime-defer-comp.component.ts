import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../prime-defer/car.service';

@Component({
  selector: 'app-prime-defer-comp',
  templateUrl: './prime-defer-comp.component.html',
  styleUrls: ['./prime-defer-comp.component.css']
})
export class PrimeDeferCompComponent implements OnInit {

  @Input() car: Car;
  constructor() { }

  ngOnInit() {
    console.log(this.car);
  }

}
