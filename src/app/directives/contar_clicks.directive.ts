import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: 'li[contar_clicks]'
})

export class ContarClicksDirective {
  clickNumber = 0;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'Número de clicks', this.clickNumber++);
    this.opacity += .1;
  }
}
