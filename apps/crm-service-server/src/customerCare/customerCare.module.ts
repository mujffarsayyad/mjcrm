import { Module } from "@nestjs/common";
import { CustomerCareModuleBase } from "./base/customerCare.module.base";
import { CustomerCareService } from "./customerCare.service";
import { CustomerCareController } from "./customerCare.controller";
import { CustomerCareResolver } from "./customerCare.resolver";

@Module({
  imports: [CustomerCareModuleBase],
  controllers: [CustomerCareController],
  providers: [CustomerCareService, CustomerCareResolver],
  exports: [CustomerCareService],
})
export class CustomerCareModule {}
