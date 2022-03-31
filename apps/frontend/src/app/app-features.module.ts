import { NgModule } from '@angular/core';
import { UiButtonsModule } from '@camping-galaxy/frontend/ui';
import { UserModule } from '@camping-galaxy/frontend/user';

@NgModule({
  imports: [UiButtonsModule, UserModule],
  exports: [UiButtonsModule, UserModule],
})
export class AppFeaturesModule {}
