import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentationService } from "./documentation.service";
import { DocumentationControllerBase } from "./base/documentation.controller.base";

@swagger.ApiTags("documentations")
@common.Controller("documentations")
export class DocumentationController extends DocumentationControllerBase {
  constructor(protected readonly service: DocumentationService) {
    super(service);
  }
}
