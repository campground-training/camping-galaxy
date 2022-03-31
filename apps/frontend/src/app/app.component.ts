import { Component, OnInit } from '@angular/core';
import { loginUser } from '@camping-galaxy/frontend/user';

import { Store } from '@ngrx/store';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { appStarted } from './state/actions/app.events';
@Component({
  selector: 'camping-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private oidcService: OidcSecurityService, private store: Store) {}

  ngOnInit(): void {
    this.oidcService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      if (isAuthenticated) {
        this.store.dispatch(loginUser({ userData }));
      }
    });
    this.store.dispatch(appStarted());
  }
}
