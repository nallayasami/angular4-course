import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite = false;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ 'isFavorite': this.isFavorite });
  }

}

export interface FavoriteComponentArgs {
  isFavorite: boolean;
}
