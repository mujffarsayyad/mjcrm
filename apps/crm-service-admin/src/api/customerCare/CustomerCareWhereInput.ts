import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerCareWhereInput = {
  contactMethod?: "Option1";
  customerName?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  issue?: StringNullableFilter;
  resolution?: StringNullableFilter;
  resolvedBy?: StringNullableFilter;
};
