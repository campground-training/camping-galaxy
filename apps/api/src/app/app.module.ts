import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiSitesModule} from '@camping-galaxy/api-sites'
@Module({
  imports: [ApiSitesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
