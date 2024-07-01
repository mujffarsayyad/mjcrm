import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrServiceBase } from "./base/pr.service.base";

@Injectable()
export class PrService extends PrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
