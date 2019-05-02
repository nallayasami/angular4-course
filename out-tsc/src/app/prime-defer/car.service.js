var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsLarge = function () {
        // const headers: Headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Accept', 'application/json');
        // const requestOptions: RequestOptionsArgs = new RequestOptions({ headers: headers });
        return JSON.parse("{\n      \"data\": [\n        {\n          \"vin\": \"ee8a89d8\",\n          \"brand\": \"Fiat\",\n          \"year\": 1987,\n          \"color\": \"Maroon\"\n        },\n        {\n          \"vin\": \"642b3edc\",\n          \"brand\": \"Renault\",\n          \"year\": 1968,\n          \"color\": \"White\"\n        },\n        {\n          \"vin\": \"19ec7580\",\n          \"brand\": \"Renault\",\n          \"year\": 1981,\n          \"color\": \"Black\"\n        },\n        {\n          \"vin\": \"39980f30\",\n          \"brand\": \"VW\",\n          \"year\": 1986,\n          \"color\": \"Red\"\n        },\n        {\n          \"vin\": \"ec9cc4e4\",\n          \"brand\": \"Fiat\",\n          \"year\": 1981,\n          \"color\": \"Brown\"\n        },\n        {\n          \"vin\": \"09a06548\",\n          \"brand\": \"VW\",\n          \"year\": 1965,\n          \"color\": \"Green\"\n        },\n        {\n          \"vin\": \"05c47246\",\n          \"brand\": \"Mercedes\",\n          \"year\": 2007,\n          \"color\": \"Blue\"\n        },\n        {\n          \"vin\": \"a9cb87aa\",\n          \"brand\": \"Fiat\",\n          \"year\": 1962,\n          \"color\": \"Green\"\n        },\n        {\n          \"vin\": \"eae758fa\",\n          \"brand\": \"BMW\",\n          \"year\": 1999,\n          \"color\": \"Yellow\"\n        },\n        {\n          \"vin\": \"1241c403\",\n          \"brand\": \"Jaguar\",\n          \"year\": 1964,\n          \"color\": \"Yellow\"\n        },\n        {\n          \"vin\": \"13f853a7\",\n          \"brand\": \"Honda\",\n          \"year\": 2006,\n          \"color\": \"White\"\n        },\n        {\n          \"vin\": \"447d9ed9\",\n          \"brand\": \"Jaguar\",\n          \"year\": 2005,\n          \"color\": \"Orange\"\n        },\n        {\n          \"vin\": \"78fa052e\",\n          \"brand\": \"Jaguar\",\n          \"year\": 1990,\n          \"color\": \"Orange\"\n        },\n        {\n          \"vin\": \"8b77772a\",\n          \"brand\": \"Mercedes\",\n          \"year\": 1991,\n          \"color\": \"Blue\"\n        },\n        {\n          \"vin\": \"23ba7e86\",\n          \"brand\": \"Honda\",\n          \"year\": 1975,\n          \"color\": \"Yellow\"\n        },\n        {\n          \"vin\": \"9bacb32d\",\n          \"brand\": \"Volvo\",\n          \"year\": 1968,\n          \"color\": \"Brown\"\n        },\n        {\n          \"vin\": \"62094d91\",\n          \"brand\": \"Mercedes\",\n          \"year\": 1962,\n          \"color\": \"Green\"\n        },\n        {\n          \"vin\": \"dc7003f4\",\n          \"brand\": \"Jaguar\",\n          \"year\": 1976,\n          \"color\": \"Maroon\"\n        },\n        {\n          \"vin\": \"08607aef\",\n          \"brand\": \"Mercedes\",\n          \"year\": 1987,\n          \"color\": \"Maroon\"\n        },\n        {\n          \"vin\": \"45eee33a\",\n          \"brand\": \"BMW\",\n          \"year\": 1980,\n          \"color\": \"Silver\"\n        },\n        {\n          \"vin\": \"f199ec5c\",\n          \"brand\": \"Jaguar\",\n          \"year\": 1961,\n          \"color\": \"Green\"\n        }\n      ]\n  } ").data;
    };
    CarService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], CarService);
    return CarService;
}());
export { CarService };
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
export { Car };
//# sourceMappingURL=car.service.js.map