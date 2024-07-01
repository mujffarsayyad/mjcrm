/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Pr } from "./Pr";
import { PrCountArgs } from "./PrCountArgs";
import { PrFindManyArgs } from "./PrFindManyArgs";
import { PrFindUniqueArgs } from "./PrFindUniqueArgs";
import { CreatePrArgs } from "./CreatePrArgs";
import { UpdatePrArgs } from "./UpdatePrArgs";
import { DeletePrArgs } from "./DeletePrArgs";
import { PrService } from "../pr.service";
@graphql.Resolver(() => Pr)
export class PrResolverBase {
  constructor(protected readonly service: PrService) {}

  async _prsMeta(@graphql.Args() args: PrCountArgs): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Pr])
  async prs(@graphql.Args() args: PrFindManyArgs): Promise<Pr[]> {
    return this.service.prs(args);
  }

  @graphql.Query(() => Pr, { nullable: true })
  async pr(@graphql.Args() args: PrFindUniqueArgs): Promise<Pr | null> {
    const result = await this.service.pr(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Pr)
  async createPr(@graphql.Args() args: CreatePrArgs): Promise<Pr> {
    return await this.service.createPr({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Pr)
  async updatePr(@graphql.Args() args: UpdatePrArgs): Promise<Pr | null> {
    try {
      return await this.service.updatePr({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Pr)
  async deletePr(@graphql.Args() args: DeletePrArgs): Promise<Pr | null> {
    try {
      return await this.service.deletePr(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
