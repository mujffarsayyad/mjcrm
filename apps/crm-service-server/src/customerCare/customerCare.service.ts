import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerCareServiceBase } from "./base/customerCare.service.base";

@Injectable()
export class CustomerCareService extends CustomerCareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
