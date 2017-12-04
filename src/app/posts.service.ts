import { DataService } from './common/service/data.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PostsService extends DataService {
  constructor( http: Http) {
    super('http://jsonplaceholder.typicode.com/posts/', http);
   }
}
