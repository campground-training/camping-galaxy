import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
@Injectable()
export class ApiSitesService {

  private readonly client = new PrismaClient();

  getSites() {
    return this.client.site.findMany();
  }
}
