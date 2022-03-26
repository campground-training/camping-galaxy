import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'camping-ui-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.css', '../../base.css'],
})
export class HeroButtonComponent {
  @Output() clicked = new EventEmitter();

  onButtonClicked() {
    this.clicked.emit();
  }
}
