import { NotFoundError } from './../error/NotFoundError';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { BadRequsetError } from '../error/BadRequsetError';
import { BaseError } from '../error/BaseError';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url, private http: Http) { }

  add(resource) {
    // return Observable.throw(new BaseError());
    return this.http.post(this.url, resource)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  update(resource: any) {
    resource.title = resource.title + '_updated';
    // return this.http.put(this.url + resource.id, JSON.stringify(resource))
    return this.http.patch(this.url + resource.id, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  getAll() {
    return this.http
      .get(this.url)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  get(id: any) {
    return this.http
      .get(this.url + id)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  delete(id) {
    // return Observable.throw(new BaseError());
    return this.http.delete(this.url + id).catch(this.handleError);
  }

  private handleError(error: Response): ErrorObservable {
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
