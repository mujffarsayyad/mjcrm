import * as graphql from "@nestjs/graphql";
import { SupportResolverBase } from "./base/support.resolver.base";
import { Support } from "./base/Support";
import { SupportService } from "./support.service";

@graphql.Resolver(() => Support)
export class SupportResolver extends SupportResolverBase {
  constructor(protected readonly service: SupportService) {
    super(service);
  }
}
