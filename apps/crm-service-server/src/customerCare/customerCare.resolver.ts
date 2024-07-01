import * as graphql from "@nestjs/graphql";
import { CustomerCareResolverBase } from "./base/customerCare.resolver.base";
import { CustomerCare } from "./base/CustomerCare";
import { CustomerCareService } from "./customerCare.service";

@graphql.Resolver(() => CustomerCare)
export class CustomerCareResolver extends CustomerCareResolverBase {
  constructor(protected readonly service: CustomerCareService) {
    super(service);
  }
}
