import * as graphql from "@nestjs/graphql";
import { PrResolverBase } from "./base/pr.resolver.base";
import { Pr } from "./base/Pr";
import { PrService } from "./pr.service";

@graphql.Resolver(() => Pr)
export class PrResolver extends PrResolverBase {
  constructor(protected readonly service: PrService) {
    super(service);
  }
}
