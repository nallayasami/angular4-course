import { FormGroup } from '@angular/forms';
import { NotFoundError } from './../common/error/NotFoundError';
import { BaseError } from './../common/error/BaseError';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { BadRequsetError } from '../common/error/BadRequsetError';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Array<any>;
  // form: FormGroup;
  constructor(private service: PostsService) { }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(() => { }, (error: BaseError) => {
      // this.form.setErrors({ loginFaild: true });
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        // some logging and error display
        alert('Resource not found');
      } else {
        throw error;
      }
    });
  }

  addPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.add(post).subscribe(response => post.id = response['id'],
      (error: BaseError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadRequsetError) {
          // some logging and error display
          // this.form.setErrors(error.error.json);
        } else {
          throw error;
        }
      });

  }

  updatePost(post) {
    this.service.update(post).subscribe(response => console.log(response));
  }

  ngOnInit() {
    this.service.getAll().subscribe(posts => this.posts = posts);
  }

}
