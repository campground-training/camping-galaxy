import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserLoggedIn, selectUserPreferredUserName } from '../../state';
import {
  loginRequested,
  logoutRequested,
} from '../../state/actions/user.events';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  userName$!: Observable<string | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(selectUserLoggedIn);
    this.userName$ = this.store.select(selectUserPreferredUserName);
  }

  logIn() {
    this.store.dispatch(loginRequested());
  }

  logOut() {
    this.store.dispatch(logoutRequested());
  }
}
