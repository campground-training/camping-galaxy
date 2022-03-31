import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { selectUserLoggedIn } from '@camping-galaxy/frontend/user';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'camping-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(selectUserLoggedIn);
  }
}
