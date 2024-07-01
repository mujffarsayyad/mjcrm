import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentGatewayService } from "./paymentGateway.service";
import { PaymentGatewayControllerBase } from "./base/paymentGateway.controller.base";

@swagger.ApiTags("paymentGateways")
@common.Controller("paymentGateways")
export class PaymentGatewayController extends PaymentGatewayControllerBase {
  constructor(protected readonly service: PaymentGatewayService) {
    super(service);
  }
}
