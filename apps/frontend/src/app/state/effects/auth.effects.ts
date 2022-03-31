import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginRequested } from '@camping/user';
import { tap } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
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
