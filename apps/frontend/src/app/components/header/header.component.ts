import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { selectUserLoggedIn, selectUserPreferredUserName } from '@camping/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'camping-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  loggedIn$!: Observable<boolean>;
  userName$!: Observable<string | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.loggedIn$ = this.store.select(selectUserLoggedIn);
    // this.userName$ = this.store.select(selectUserPreferredUserName);
  }
}
