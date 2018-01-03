import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-script-loading',
  templateUrl: './script-loading.component.html',
  styleUrls: ['./script-loading.component.css']
})
export class ScriptLoadingComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() {
    const node = document.createElement('script');
    node.src = '/assets/script-loading.script.js';
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked', window['myFn']);
    if (!!window['myFn']) {
      window['myFn']('From the ngAfterViewChecked');
    }
  }

}
