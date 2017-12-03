import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group(
      {
        'fullName': fb.control('', [Validators.required]),
        'address': fb.group({
          'city': fb.control('')
        })
      });
  }

  ngOnInit() {
  }

  log() {
    console.log(this.form.value);
  }

}
