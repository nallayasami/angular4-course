import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService extends DataService {
  constructor( http: Http) {
    super('http://jsonplaceholder.typicode.com/users/', http);
   }
}
