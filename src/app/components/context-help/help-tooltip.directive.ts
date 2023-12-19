import { ComponentRef, Directive, ElementRef, HostListener, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { HelpTooltipComponent } from './help-tooltip/help-tooltip.component';

@Directive({
  selector: '[appHelpTooltip]'
})
export class HelpTooltipDirective {
  @Input() set appHelpTooltip(section: string) {
    this.embedComponent(section);
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private vr: ViewContainerRef
  ) {}

  @HostListener('mouseover')
  mouseover() {
    console.log(`mouseover`)
    this.renderer.setStyle(this.ref.location.nativeElement, 'opacity', '1');
  }
  @HostListener('mouseleave')
  mouseleave() {
    console.log(`mouseleave`)
    this.renderer.setStyle(this.ref.location.nativeElement, 'opacity', '0');
  }

  ref!: ComponentRef<any>;

  private embedComponent(section: string) {
    const firstChild = this.elementRef.nativeElement.firstChild;
    this.vr.clear();
    this.ref = this.vr.createComponent(HelpTooltipComponent);
    this.ref.instance.section = section;

    this.renderer.setStyle(this.ref.location.nativeElement, 'opacity', '1');

    // this.renderer.insertBefore(
    //   this.elementRef.nativeElement,
    //   this.ref.location.nativeElement,
    //   firstChild
    // );

    this.renderer.appendChild(this.elementRef.nativeElement, this.ref.location.nativeElement);
  }

}
