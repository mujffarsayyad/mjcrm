import * as graphql from "@nestjs/graphql";
import { DocumentationResolverBase } from "./base/documentation.resolver.base";
import { Documentation } from "./base/Documentation";
import { DocumentationService } from "./documentation.service";

@graphql.Resolver(() => Documentation)
export class DocumentationResolver extends DocumentationResolverBase {
  constructor(protected readonly service: DocumentationService) {
    super(service);
  }
}
