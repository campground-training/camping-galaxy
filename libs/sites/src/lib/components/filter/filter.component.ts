import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'camping-sites-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
