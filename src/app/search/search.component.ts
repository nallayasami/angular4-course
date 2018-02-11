import { GitService } from './../common/service/git-service';
import { CarService, Car } from './../prime-defer/car.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GitUser } from '../github-user/github-user.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  fg: FormGroup;
  cars: Car[];
  users: GitUser[];
  display: boolean;
  valueChange: Subscription;
  constructor(private fb: FormBuilder, private service: CarService, private gitService: GitService) {
    this.fg = fb.group({
      'input': fb.control('', []),
      'userName': fb.control('', []),
    });
  }

  get input() {
    return this.fg.get('input');
  }

  get userName() {
    return this.fg.get('userName');
  }

  resetQuery() {
    console.log('resetting value');
    this.fg.get('userName').setValue('');
  }

  onKeypress() {
    console.log(this.input.value);
    this.cars = this.service.getCarsLarge().filter((value: Car) => {
      return value.brand.indexOf(this.input.value) >= 0;
    });
  }

  showPanel() {
    if ((this.userName.value as string).length > 3) {
      this.display = true;
    }
  }

  ngOnInit() {
    this.cars = this.service.getCarsLarge();

    this.valueChange = this.userName.valueChanges
      .flatMap((val: string) => {
        console.log(val);
        if (val.length > 3) {
          return this.gitService.queryInput(val);
        } else {
          return Observable.of(null);
        }
      }).subscribe((response) => {
        if (response) {
          this.users = response.items;
        }
      });
  }

  ngOnDestroy() {
    if (this.valueChange) {
      this.valueChange.unsubscribe();
    }
  }

}