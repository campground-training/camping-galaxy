import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './state';
import { SitesComponent } from './sites.component';
import { RouterModule, Routes} from '@angular/router';

const routes:Routes = [
  {
    path: '',
    component: SitesComponent
  }
]

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureName, reducers), RouterModule.forChild(routes)],
  declarations: [
    SitesComponent
  ],
})
export class SitesModule {}
