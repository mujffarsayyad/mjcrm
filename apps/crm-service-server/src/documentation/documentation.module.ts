import { Module } from "@nestjs/common";
import { DocumentationModuleBase } from "./base/documentation.module.base";
import { DocumentationService } from "./documentation.service";
import { DocumentationController } from "./documentation.controller";
import { DocumentationResolver } from "./documentation.resolver";

@Module({
  imports: [DocumentationModuleBase],
  controllers: [DocumentationController],
  providers: [DocumentationService, DocumentationResolver],
  exports: [DocumentationService],
})
export class DocumentationModule {}
