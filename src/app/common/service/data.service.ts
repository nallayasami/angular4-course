import { HttpClient } from '@angular/common/http';
import { NotFoundError } from './../error/NotFoundError';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { BadRequsetError } from '../error/BadRequsetError';
import { BaseError } from '../error/BaseError';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  add(resource) {
    // return Observable.throw(new BaseError());
    return this.http.post(this.url, resource)
      .catch(this.handleError);
    // .map((response: Response) => {
    //   return response.json();
    // })
  }

  update(resource: any) {
    resource.title = resource.title + '_updated';
    return this.http.patch(this.url + resource.id, JSON.stringify(resource))
      // return this.http.put(this.url + resource.id, JSON.stringify(resource))
      .catch(this.handleError);
    // .map(response => response.json())
  }

  getAll(): Observable<any> {
    return this.http
      .get(this.url)
      .catch(this.handleError);
    // .map((response: Response) => {
    //   return response.json();
    // })
  }
  get(id: any) {
    return this.http
      .get(this.url + id)
      .catch(this.handleError);
    // .map((response: Response) => {
    //   return response.json();
    // })
  }

  delete(id) {
    // return Observable.throw(new BaseError());
    return this.http.delete(this.url + id).catch(this.handleError);
  }

  queryInput(query: string) {
    return this.http.get(this.url, { 'params': { 'q': query } }).catch(this.handleError);
  }

  private handleError(error: Response): ErrorObservable<BaseError> {
    console.log(error);
    if (error.status === 400) {
      return Observable.throw(new BadRequsetError(error));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new BaseError(error));
  }


}
