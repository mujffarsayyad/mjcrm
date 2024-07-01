import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GoalWhereInput = {
  assignedTo?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  goalName?: StringNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
};
