import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrService } from "./pr.service";
import { PrControllerBase } from "./base/pr.controller.base";

@swagger.ApiTags("prs")
@common.Controller("prs")
export class PrController extends PrControllerBase {
  constructor(protected readonly service: PrService) {
    super(service);
  }
}
