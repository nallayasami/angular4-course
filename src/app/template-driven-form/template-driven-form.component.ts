import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  contactMethods: Array<any> = [{ id: '1', value: 'E-Mail' }, { id: '2', value: 'Telephone' }];

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  formSubmit(f) {
    console.log(f);
    console.log(f.value);

  }

}
