/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSaleProduct } from "./EnumSaleProduct";
import { EnumSaleStatus } from "./EnumSaleStatus";

@InputType()
class SaleCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customer?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumSaleProduct,
  })
  @IsEnum(EnumSaleProduct)
  @IsOptional()
  @Field(() => EnumSaleProduct, {
    nullable: true,
  })
  product?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumSaleStatus,
  })
  @IsEnum(EnumSaleStatus)
  @IsOptional()
  @Field(() => EnumSaleStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { SaleCreateInput as SaleCreateInput };
