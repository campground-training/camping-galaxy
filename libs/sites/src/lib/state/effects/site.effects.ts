import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SiteEntity } from '@camping/api-interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as commands from '../actions/sites.commands';
import * as documents from '../actions/sites.documents';
@Injectable()
export class SiteEffects {
  loadSites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.loadSites),
      switchMap(() =>
        this.http.get<{ data: SiteEntity[] }>('/api/sites').pipe(
          map((r) => r.data),
          map((payload) => documents.sitesDocument({ payload }))
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
