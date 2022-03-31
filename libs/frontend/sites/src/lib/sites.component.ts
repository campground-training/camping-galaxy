import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { sitesFeatureStarted } from './state/actions/feature.events';

@Component({
  selector: 'camping-sites-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SitesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(sitesFeatureStarted());
  }
}
