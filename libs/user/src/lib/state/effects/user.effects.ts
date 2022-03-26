import { Injectable } from '@nestjs/common';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as events from '../actions/user.events';
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}
}
