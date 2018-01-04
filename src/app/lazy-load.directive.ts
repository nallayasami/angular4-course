import {
  Directive, Renderer2, ElementRef, ViewContainerRef, TemplateRef,
  HostListener, Output, EventEmitter, OnDestroy, AfterViewInit, EmbeddedViewRef, ContentChild, ChangeDetectorRef
} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnDestroy, AfterViewInit {

  @Output('onLoad') onLoad: EventEmitter<any> = new EventEmitter();
  private view: EmbeddedViewRef<any>;
  private documentScrollListener: Function;
  @ContentChild(TemplateRef) private template: TemplateRef<any>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef) {
  }

  shouldLoad(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const docElement = document.documentElement;
    const scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
    const winHeight = docElement.clientHeight;
    return (winHeight >= rect.top);
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
    }
  }

  ngOnDestroy() {
    this.view = null;
    if (this.documentScrollListener) {
      this.documentScrollListener();
    }
  }

}
