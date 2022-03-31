import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgrxAppModule } from './app-ngrx.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { AppFeaturesModule } from './app-features.module';
import { KeyCloakAuthModule } from './app-auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, HeaderComponent, GreetingComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgrxAppModule,
    AppFeaturesModule,
    AppRoutingModule,
    KeyCloakAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
