import { LikeComponentArgs } from './../../like/like.component';
import { FavoriteComponentArgs } from './../../favorite/favorite.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {

  reusableComponent: FavoriteComponentArgs = { isFavorite: false };
  likeComponent: LikeComponentArgs = { isLiked: true, likeCount: 10 };

  constructor() { }

  isFavoriteChanged(changeEvent: FavoriteComponentArgs) {
    this.reusableComponent = changeEvent;
  }

  likeBtnCliked($event: LikeComponentArgs) {
    console.log($event);
    this.likeComponent = $event;
  }

  ngOnInit() {
  }

}
