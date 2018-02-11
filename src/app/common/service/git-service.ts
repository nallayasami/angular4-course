import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GitService extends DataService {
    constructor(http: HttpClient) {
        super('https://api.github.com/search/users', http);
    }
}
