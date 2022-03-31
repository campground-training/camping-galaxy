import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SiteEntity } from '@camping/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectSiteList } from '../../state';
import { fadeAnimation } from './animations';
@Component({
  selector: 'camping-sites-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
})
export class ListComponent implements OnInit {
  sites$!: Observable<SiteEntity[]>;
  changeCount = 0;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.sites$ = this.store
      .select(selectSiteList)
      .pipe(tap(() => this.changeCount++)); // bit of a hack to force the animations
  }
}
