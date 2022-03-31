import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { loginRequested } from '@camping-galaxy/frontend/user';
@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () => {
      return this.actions.pipe(
        ofType(loginRequested),
        tap(() => this.oidcService.authorize())
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions: Actions,
    private oidcService: OidcSecurityService
  ) {}
}
