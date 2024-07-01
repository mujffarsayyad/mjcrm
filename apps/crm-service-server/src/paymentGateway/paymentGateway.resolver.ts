import * as graphql from "@nestjs/graphql";
import { PaymentGatewayResolverBase } from "./base/paymentGateway.resolver.base";
import { PaymentGateway } from "./base/PaymentGateway";
import { PaymentGatewayService } from "./paymentGateway.service";

@graphql.Resolver(() => PaymentGateway)
export class PaymentGatewayResolver extends PaymentGatewayResolverBase {
  constructor(protected readonly service: PaymentGatewayService) {
    super(service);
  }
}
