import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'camping-sites-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SitesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
