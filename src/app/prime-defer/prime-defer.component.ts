import { Response } from '@angular/http';
import { CarService } from './car.service';
import { Car } from './../prime-order-list/prime-order-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-defer',
  templateUrl: './prime-defer.component.html',
  styleUrls: ['./prime-defer.component.css']
})
export class PrimeDeferComponent implements OnInit {

  cars: Car[];

  defer: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCarsLarge();
  }

  initData() {
    // console.log('On Init');
    // console.log(arguments);
  }
}
