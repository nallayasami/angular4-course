import { Component, OnInit } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-prime-order-list',
  templateUrl: './prime-order-list.component.html',
  styleUrls: ['./prime-order-list.component.css']
})
export class PrimeOrderListComponent implements OnInit {

  cars: Car[];
  carsOrg: string[] = [];
  currentSelectedItem: Car;

  ngOnInit() {
    this.cars = Array.prototype.concat(new Car('1', 'BMV', 9), new Car('2', 'MC', 4), new Car('3', 'VW', 2), new Car('4', 'Audi', 1));
    this.carsOrg = this.cars.map((car: Car) => {
      return car.id;
    });
  }

  onReorder() {
    // Find first and last index
    let startIndex: number = null;
    let endIndex = 0;
    this.cars.forEach((item: Car, index: number) => {
      if (this.carsOrg[index] !== item.id) {
        if (startIndex === null) {
          startIndex = index;
        }
        endIndex = index + 1;
      }
    });
    // Find Max sort order
    let maxSortOrder = 0;
    if (endIndex > 0) {
      const subSet: Car[] = this.cars.slice(startIndex, endIndex);
      subSet.forEach((value: Car) => {
        if (value.sort_order > maxSortOrder) {
          maxSortOrder = value.sort_order;
        }
      });
      // Creates a request Object SortOrder - {id: number, sort_order: number}
      console.log(subSet.map((value: Car) => new SortOrder(value.id, maxSortOrder--)));
    }
  }
}

export class Car {
  constructor(public id: string, public brand: string, public sort_order?: number) { }
}

export class SortOrder {
  constructor(public id: string, public sort_order: number) { }
}
