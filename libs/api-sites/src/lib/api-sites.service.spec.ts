import { Test } from '@nestjs/testing';
import { ApiSitesService } from './api-sites.service';

describe('ApiSitesService', () => {
  let service: ApiSitesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiSitesService],
    }).compile();

    service = module.get(ApiSitesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
