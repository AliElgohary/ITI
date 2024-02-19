import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductcard]',
  standalone: true,
})
export class ProductcardDirective {
  constructor(private domEle: ElementRef) {
    this.domEle.nativeElement.style.borderRadius = '25px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.domEle.nativeElement.style.boxShadow =
      '20px 20px 20px rgba(0, 0, 0, 0.3)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.domEle.nativeElement.style.boxShadow =
      '5px 5px 5px rgba(0, 0, 0, 0.1)';
  }
}
