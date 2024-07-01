import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalysisService } from "./analysis.service";
import { AnalysisControllerBase } from "./base/analysis.controller.base";

@swagger.ApiTags("analyses")
@common.Controller("analyses")
export class AnalysisController extends AnalysisControllerBase {
  constructor(protected readonly service: AnalysisService) {
    super(service);
  }
}
