import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as featureEvents from '../actions/feature.events';
import * as siteCommands from '../actions/sites.commands';
@Injectable()
export class SitesFeatureEffects {
  onStartLoadSites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featureEvents.sitesFeatureStarted),
      map(() => siteCommands.loadSites())
    );
  });
  constructor(private actions$: Actions) {}
}
