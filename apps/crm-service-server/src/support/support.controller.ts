import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupportService } from "./support.service";
import { SupportControllerBase } from "./base/support.controller.base";

@swagger.ApiTags("supports")
@common.Controller("supports")
export class SupportController extends SupportControllerBase {
  constructor(protected readonly service: SupportService) {
    super(service);
  }
}
