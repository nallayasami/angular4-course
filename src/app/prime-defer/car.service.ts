import { Car } from './../prime-order-list/prime-order-list.component';
import { Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getCarsLarge() {
    // const headers: Headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Accept', 'application/json');
    // const requestOptions: RequestOptionsArgs = new RequestOptions({ headers: headers });

    return JSON.parse(`{
      "data": [
        {
          "vin": "ee8a89d8",
          "brand": "Fiat",
          "year": 1987,
          "color": "Maroon"
        },
        {
          "vin": "642b3edc",
          "brand": "Renault",
          "year": 1968,
          "color": "White"
        },
        {
          "vin": "19ec7580",
          "brand": "Renault",
          "year": 1981,
          "color": "Black"
        },
        {
          "vin": "39980f30",
          "brand": "VW",
          "year": 1986,
          "color": "Red"
        },
        {
          "vin": "ec9cc4e4",
          "brand": "Fiat",
          "year": 1981,
          "color": "Brown"
        },
        {
          "vin": "09a06548",
          "brand": "VW",
          "year": 1965,
          "color": "Green"
        },
        {
          "vin": "05c47246",
          "brand": "Mercedes",
          "year": 2007,
          "color": "Blue"
        },
        {
          "vin": "a9cb87aa",
          "brand": "Fiat",
          "year": 1962,
          "color": "Green"
        },
        {
          "vin": "eae758fa",
          "brand": "BMW",
          "year": 1999,
          "color": "Yellow"
        },
        {
          "vin": "1241c403",
          "brand": "Jaguar",
          "year": 1964,
          "color": "Yellow"
        },
        {
          "vin": "13f853a7",
          "brand": "Honda",
          "year": 2006,
          "color": "White"
        },
        {
          "vin": "447d9ed9",
          "brand": "Jaguar",
          "year": 2005,
          "color": "Orange"
        },
        {
          "vin": "78fa052e",
          "brand": "Jaguar",
          "year": 1990,
          "color": "Orange"
        },
        {
          "vin": "8b77772a",
          "brand": "Mercedes",
          "year": 1991,
          "color": "Blue"
        },
        {
          "vin": "23ba7e86",
          "brand": "Honda",
          "year": 1975,
          "color": "Yellow"
        },
        {
          "vin": "9bacb32d",
          "brand": "Volvo",
          "year": 1968,
          "color": "Brown"
        },
        {
          "vin": "62094d91",
          "brand": "Mercedes",
          "year": 1962,
          "color": "Green"
        },
        {
          "vin": "dc7003f4",
          "brand": "Jaguar",
          "year": 1976,
          "color": "Maroon"
        },
        {
          "vin": "08607aef",
          "brand": "Mercedes",
          "year": 1987,
          "color": "Maroon"
        },
        {
          "vin": "45eee33a",
          "brand": "BMW",
          "year": 1980,
          "color": "Silver"
        },
        {
          "vin": "f199ec5c",
          "brand": "Jaguar",
          "year": 1961,
          "color": "Green"
        }
      ]
  } `).data;

  }

}