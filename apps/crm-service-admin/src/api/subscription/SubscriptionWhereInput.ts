import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SubscriptionWhereInput = {
  customerName?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  product?: "Option1";
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
