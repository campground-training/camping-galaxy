import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiSitesModule} from '@camping/api-sites'
@Module({
  imports: [ApiSitesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
