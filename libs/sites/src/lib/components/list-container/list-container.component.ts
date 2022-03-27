import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'camping-sites-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
