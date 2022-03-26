import { NgModule } from '@angular/core';
import { HeroButtonComponent } from './buttons/hero-button/hero-button.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeroButtonComponent],
  imports: [RouterModule.forChild([])],
  exports: [HeroButtonComponent],
})
export class UiButtonsModule {}
