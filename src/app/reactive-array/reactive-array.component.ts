import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-array',
  templateUrl: './reactive-array.component.html',
  styleUrls: ['./reactive-array.component.css']
})
export class ReactiveArrayComponent implements OnInit {

  form = new FormGroup({
    courses: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  get courses() {
    return this.form.get('courses') as FormArray;
  }

  addCourse(input: HTMLInputElement) {
    if (input.value) {
      this.courses.push(new FormControl(input.value));
    }
    input.value = '';
  }

  removeCourse(course: FormControl) {
    const index: number = this.courses.controls.indexOf(course);
    this.courses.removeAt(index);
  }

}
