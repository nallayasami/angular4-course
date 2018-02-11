import { CarService, Car } from './../prime-defer/car.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  fg: FormGroup;
  cars: Car[];
  constructor(private fb: FormBuilder, private service: CarService) {
    this.fg = fb.group({ 'input': fb.control('', [Validators.required]) });
  }

  get input() {
    return this.fg.get('input');
  }

  onKeypress() {
    console.log(this.input.value);
    this.cars = this.service.getCarsLarge().filter((value: Car) => {
      return value.brand.indexOf(this.input.value) >= 0;
    });
  }

  ngOnInit() {
    this.cars = this.service.getCarsLarge();
  }

}
