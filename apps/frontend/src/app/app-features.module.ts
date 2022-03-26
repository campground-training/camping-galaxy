import { NgModule } from '@angular/core';
import { UiButtonsModule } from '@camping/ui';
import { UserModule } from '@camping/user';
@NgModule({
  imports: [UiButtonsModule, UserModule],
  exports: [UiButtonsModule, UserModule],
})
export class AppFeaturesModule {}
