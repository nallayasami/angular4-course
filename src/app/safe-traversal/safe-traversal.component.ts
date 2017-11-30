import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-traversal',
  templateUrl: './safe-traversal.component.html',
  styleUrls: ['./safe-traversal.component.css']
})
export class SafeTraversalComponent implements OnInit {

  complexObj:any={
    id:1,
    name:{
      firstName:'Seldon',
      lastName: 'Cooper'
    },
    age: 35
  }

  constructor() { }

  ngOnInit() {
  }

}
