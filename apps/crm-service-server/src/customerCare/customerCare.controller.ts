import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerCareService } from "./customerCare.service";
import { CustomerCareControllerBase } from "./base/customerCare.controller.base";

@swagger.ApiTags("customerCares")
@common.Controller("customerCares")
export class CustomerCareController extends CustomerCareControllerBase {
  constructor(protected readonly service: CustomerCareService) {
    super(service);
  }
}
