import {
  Directive, Renderer2, ElementRef, ViewContainerRef, TemplateRef,
  Output, EventEmitter, OnDestroy, AfterViewInit, EmbeddedViewRef, ContentChild, ChangeDetectorRef
} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnDestroy, AfterViewInit {

  static APP_CLASS = 'app-lazy-load';
  @Output('onLoad') onLoad: EventEmitter<any> = new EventEmitter();
  private view: EmbeddedViewRef<any>;
  private documentScrollListener: Function;
  private documentResizeListener: Function;
  @ContentChild(TemplateRef) private template: TemplateRef<any>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef) {
  }

  shouldLoad(): boolean {
    let response = false;
    if (this.view == null) {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const docElement = document.documentElement;
      const scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
      const winHeight = docElement.clientHeight;
      response = (winHeight >= rect.top);
    }
    const tl: DOMTokenList = (this.el.nativeElement as HTMLElement).classList;
    if (response) {
      tl.remove(LazyLoadDirective.APP_CLASS);
    } else if (!tl.contains(LazyLoadDirective.APP_CLASS)) {
      tl.add(LazyLoadDirective.APP_CLASS);
    }
    return response;
  }

  load() {
    if (this.template) {
      this.view = this.viewContainer.createEmbeddedView(this.template);
      this.onLoad.emit();
      this.cdr.detectChanges();
    } else {
      console.warn('Template does not exist!');
    }
  }

  ngAfterViewInit() {
    if (this.shouldLoad()) {
      this.load();
    } else {
      const inst = this;
      this.documentScrollListener = this.renderer.listen('window', 'scroll', function () {
        if (inst.shouldLoad()) {
          inst.load();
          inst.documentScrollListener();
          inst.documentScrollListener = null;
        }
      });
      this.documentResizeListener = this.renderer.listen('window', 'resize', function () {
        if (inst.shouldLoad()) {
          inst.load();
          inst.documentResizeListener();
          inst.documentResizeListener = null;
        }
      });
    }
  }

  ngOnDestroy() {
    this.view = null;
    if (this.documentScrollListener) {
      this.documentScrollListener();
    }
    if (this.documentResizeListener) {
      this.documentResizeListener();
    }
  }

}
