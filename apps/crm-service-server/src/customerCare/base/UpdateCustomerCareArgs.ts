/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerCareWhereUniqueInput } from "./CustomerCareWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerCareUpdateInput } from "./CustomerCareUpdateInput";

@ArgsType()
class UpdateCustomerCareArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerCareWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerCareWhereUniqueInput)
  @Field(() => CustomerCareWhereUniqueInput, { nullable: false })
  where!: CustomerCareWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerCareUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerCareUpdateInput)
  @Field(() => CustomerCareUpdateInput, { nullable: false })
  data!: CustomerCareUpdateInput;
}

export { UpdateCustomerCareArgs as UpdateCustomerCareArgs };
