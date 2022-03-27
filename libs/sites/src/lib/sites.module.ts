import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './state';
import { SitesComponent } from './sites.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { EffectsModule } from '@ngrx/effects';
import { SitesFeatureEffects } from './state/effects/feature.effects';
import { HttpClientModule } from '@angular/common/http';
import { SiteEffects } from './state/effects/site.effects';
const routes: Routes = [
  {
    path: '',
    component: SitesComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, reducers),
    RouterModule.forChild(routes),
    EffectsModule.forFeature([SitesFeatureEffects, SiteEffects]),
  ],
  declarations: [SitesComponent, ListComponent],
})
export class SitesModule {}
