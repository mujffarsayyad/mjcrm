import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SaleWhereInput = {
  amount?: FloatNullableFilter;
  customer?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  product?: "Option1";
  status?: "Option1";
};
