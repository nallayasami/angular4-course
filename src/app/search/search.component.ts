import { GitService } from './../common/service/git-service';
import { CarService, Car } from './../prime-defer/car.service';
import { Component, OnInit, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GitUser } from '../github-user/github-user.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
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
  @ViewChildren('searchToggle') searchToggle: QueryList<ElementRef>;

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

  ngOnInit() {
    this.cars = this.service.getCarsLarge();

    this.valueChange = this.userName.valueChanges
      .debounce(() => Observable.timer(500))
      .flatMap((val: string) => {
        if (val.length > 3) {
          this.display = true;
          return this.gitService.queryInput(val);
        } else {
          this.display = false;
          return Observable.of(null);
        }
      }).subscribe((response) => {
        this.searchToggle.forEach(item => {
          if (item.nativeElement) {
            (item.nativeElement as HTMLElement).classList.toggle('hidden', this.display);
          }
        });
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
