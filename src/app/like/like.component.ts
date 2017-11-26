import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likeCount') likeCount: number;
  @Input('isLiked') isLiked: boolean;
  @Output('like') like = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = !this.isLiked;
    this.likeCount = Number(this.likeCount) + (this.isLiked ? 1 : -1);
    this.like.emit({ 'likeCount': this.likeCount, 'isLiked': this.isLiked });
  }

}

export interface LikeComponentArgs {
  likeCount: number;
  isLiked: boolean;
}
