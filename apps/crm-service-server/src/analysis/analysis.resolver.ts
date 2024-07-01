import * as graphql from "@nestjs/graphql";
import { AnalysisResolverBase } from "./base/analysis.resolver.base";
import { Analysis } from "./base/Analysis";
import { AnalysisService } from "./analysis.service";

@graphql.Resolver(() => Analysis)
export class AnalysisResolver extends AnalysisResolverBase {
  constructor(protected readonly service: AnalysisService) {
    super(service);
  }
}
