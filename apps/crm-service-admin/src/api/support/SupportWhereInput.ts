import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupportWhereInput = {
  assignedTo?: StringNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  issue?: StringNullableFilter;
  priority?: "Option1";
  resolution?: StringNullableFilter;
  status?: "Option1";
};
