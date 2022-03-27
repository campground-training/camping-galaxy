import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SiteEntity } from '@camping/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSiteList } from '../../state';

@Component({
  selector: 'camping-sites-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  sites$!: Observable<SiteEntity[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.sites$ = this.store.select(selectSiteList);
  }
}
