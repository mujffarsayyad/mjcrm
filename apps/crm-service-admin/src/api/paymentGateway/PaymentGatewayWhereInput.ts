import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentGatewayWhereInput = {
  createdBy?: StringNullableFilter;
  credentials?: JsonFilter;
  enabled?: BooleanNullableFilter;
  gatewayName?: StringNullableFilter;
  id?: StringFilter;
};
