import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './state';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, StoreModule],
  declarations: [UserComponent, LoginComponent, ProfileComponent],
})
export class UserModule {}
