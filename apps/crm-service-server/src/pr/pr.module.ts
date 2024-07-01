import { Module } from "@nestjs/common";
import { PrModuleBase } from "./base/pr.module.base";
import { PrService } from "./pr.service";
import { PrController } from "./pr.controller";
import { PrResolver } from "./pr.resolver";

@Module({
  imports: [PrModuleBase],
  controllers: [PrController],
  providers: [PrService, PrResolver],
  exports: [PrService],
})
export class PrModule {}
