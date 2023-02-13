import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective {

  constructor(private Ref: ElementRef) { }
  ngOnInit(): void {
    this.Ref.nativeElement.value
  }

  @HostListener('click') onclick() {
    if (this.Ref.nativeElement.value < 1 || this.Ref.nativeElement.value > 10) {
      alert("minimum 10");
    } else {
      alert("corect");
    }
  }

  
}

