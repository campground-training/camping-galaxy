import { Injectable } from '@nestjs/common';
import { Actions } from '@ngrx/effects';
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}
}
