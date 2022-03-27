import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './state';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureName, reducers)],
})
export class SitesModule {}
