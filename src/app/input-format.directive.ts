import { Directive, HostListener, ElementRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  //Use the same name as selector to handle a single parameter situations.
  @Input('appInputFormat') appInputFormat: string;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onfocus() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = 'Format :' + this.appInputFormat + ' - value in lowercase: ' + value.toLowerCase();
  }

}
