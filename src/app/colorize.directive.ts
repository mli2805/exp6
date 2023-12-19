import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorize]'
})
export class ColorizeDirective {
  @Input() set rtuColorizeBySystemEventLevel(color: string) {
    this.applyColor(color);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private applyColor(color: string){
    const { nativeElement } = this.el;

    this.renderer.addClass(nativeElement, `bg-${color}-600`);
  }
}
