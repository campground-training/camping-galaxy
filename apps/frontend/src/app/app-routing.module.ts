import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './components/greeting/greeting.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'greeting',
        component: GreetingComponent,
      },

      {
        path: '**',
        redirectTo: 'greeting',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
