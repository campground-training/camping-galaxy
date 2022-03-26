import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './state/effects/auth.effects';

// TODO: Do a build-specifics for the devtools module
@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
  ],
  exports: [StoreModule, EffectsModule, EffectsModule],
})
export class NgrxAppModule {}
