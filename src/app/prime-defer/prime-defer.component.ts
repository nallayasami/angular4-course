import { Response } from '@angular/http';
import { CarService, Car } from './car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-defer',
  templateUrl: './prime-defer.component.html',
  styleUrls: ['./prime-defer.component.css']
})
export class PrimeDeferComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCarsLarge();
  }

  initData() {
    // console.log('On Init');
    // console.log(arguments);
  }
}
