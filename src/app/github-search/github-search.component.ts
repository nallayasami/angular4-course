import { Component, OnInit, Input, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange: EventEmitter<boolean>;
  @Input() query: string;

  @Output() onClose: EventEmitter<any>;

  constructor() {
    this.displayChange = new EventEmitter();
    this.onClose = new EventEmitter();
  }

  @HostListener('window:keyup', ['$event'])
  onEsc($event: KeyboardEvent) {
    if ($event.keyCode === 27) {
      this.reset();
    }
  }

  reset() {
    this.display = false;
    this.query = '';
    this.displayChange.emit(this.display);
    this.onClose.emit({});
  }

  ngOnInit() {
  }

}
