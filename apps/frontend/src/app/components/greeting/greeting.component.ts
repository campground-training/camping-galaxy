import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'camping-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent {}
