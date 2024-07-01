import { Module } from "@nestjs/common";
import { AnalysisModuleBase } from "./base/analysis.module.base";
import { AnalysisService } from "./analysis.service";
import { AnalysisController } from "./analysis.controller";
import { AnalysisResolver } from "./analysis.resolver";

@Module({
  imports: [AnalysisModuleBase],
  controllers: [AnalysisController],
  providers: [AnalysisService, AnalysisResolver],
  exports: [AnalysisService],
})
export class AnalysisModule {}
