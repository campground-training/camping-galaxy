import { Test } from '@nestjs/testing';
import { ApiSitesController } from './api-sites.controller';
import { ApiSitesService } from './api-sites.service';

describe('ApiSitesController', () => {
  let controller: ApiSitesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiSitesService],
      controllers: [ApiSitesController],
    }).compile();

    controller = module.get(ApiSitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
