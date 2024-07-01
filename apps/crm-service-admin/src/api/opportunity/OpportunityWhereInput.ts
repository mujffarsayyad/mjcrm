import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OpportunityWhereInput = {
  assignedTo?: StringNullableFilter;
  closeDate?: DateTimeNullableFilter;
  id?: StringFilter;
  opportunityName?: StringNullableFilter;
  stage?: "Option1";
  value?: FloatNullableFilter;
};
