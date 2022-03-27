import { SiteEntity } from '@camping-galaxy/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { ApiSitesService } from './api-sites.service';

@Controller('sites')
export class ApiSitesController {
  constructor(private apiSitesService: ApiSitesService) {}

    @Get()
    async getSites() : Promise< { data:SiteEntity[]}> {
      const data = await this.apiSitesService.getSites();
      return { data };
    }

}
