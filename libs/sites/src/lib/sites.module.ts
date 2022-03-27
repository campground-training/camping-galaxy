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
import { ListContainerComponent } from './components/list-container/list-container.component';
import { FilterComponent } from './components/filter/filter.component';
const routes: Routes = [
  {
    path: '',
    component: SitesComponent,
    children: [
      {
        path: '',
        component: ListContainerComponent,
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
  declarations: [SitesComponent, ListComponent, ListContainerComponent, FilterComponent],
})
export class SitesModule {}
