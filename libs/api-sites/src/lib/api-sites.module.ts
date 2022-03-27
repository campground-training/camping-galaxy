import { Module } from '@nestjs/common';
import { ApiSitesController } from './api-sites.controller';
import { ApiSitesService } from './api-sites.service';

@Module({
  controllers: [ApiSitesController],
  providers: [ApiSitesService],
  exports: [ApiSitesService],
})
export class ApiSitesModule {}
