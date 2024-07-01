/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CustomerCare as PrismaCustomerCare } from "@prisma/client";

export class CustomerCareServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomerCareCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customerCare.count(args);
  }

  async customerCares(
    args: Prisma.CustomerCareFindManyArgs
  ): Promise<PrismaCustomerCare[]> {
    return this.prisma.customerCare.findMany(args);
  }
  async customerCare(
    args: Prisma.CustomerCareFindUniqueArgs
  ): Promise<PrismaCustomerCare | null> {
    return this.prisma.customerCare.findUnique(args);
  }
  async createCustomerCare(
    args: Prisma.CustomerCareCreateArgs
  ): Promise<PrismaCustomerCare> {
    return this.prisma.customerCare.create(args);
  }
  async updateCustomerCare(
    args: Prisma.CustomerCareUpdateArgs
  ): Promise<PrismaCustomerCare> {
    return this.prisma.customerCare.update(args);
  }
  async deleteCustomerCare(
    args: Prisma.CustomerCareDeleteArgs
  ): Promise<PrismaCustomerCare> {
    return this.prisma.customerCare.delete(args);
  }
}
