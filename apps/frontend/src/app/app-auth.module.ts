import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'https://auth.camping-training.com/auth/realms/camping-dev/.well-known/openid-configuration',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'frontend',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class KeyCloakAuthModule {}
