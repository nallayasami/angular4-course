import {
  Directive, Renderer2, ElementRef, ViewContainerRef, TemplateRef,
  HostListener, Output, EventEmitter, OnDestroy, AfterViewInit, EmbeddedViewRef
} from '@angular/core';
import { DomHandler } from 'primeng/components/dom/domhandler';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnDestroy, AfterViewInit {

  @Output('onLoad') onLoad: EventEmitter<any> = new EventEmitter();
  private view: EmbeddedViewRef<any>;
  private documentScrollListener: Function;

  constructor(
    private el: ElementRef,
    private domHandler: DomHandler,
    private renderer: Renderer2,
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {

  }

  shouldLoad() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const docElement = document.documentElement;
    const scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
    const winHeight = docElement.clientHeight;
    return (winHeight >= rect.top);
  }

  load() {
    this.view = this.viewContainer.createEmbeddedView(this.template);
    this.onLoad.emit();
  }

  ngAfterViewInit() {
    if (this.shouldLoad()) {
      this.load();
    }
    const documentScrollListener = this.renderer.listen('window', 'scroll', function () {
      if (this.shouldLoad()) {
        this.load();
        this.documentScrollListener();
        this.documentScrollListener = null;
      }
    });
  }

  ngOnDestroy() {
    this.view = null;
    if (this.documentScrollListener) {
      this.documentScrollListener();
    }
  }

}
