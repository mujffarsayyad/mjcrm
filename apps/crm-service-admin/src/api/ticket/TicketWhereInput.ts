import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TicketWhereInput = {
  assignedTo?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  product?: "Option1";
  status?: "Option1";
  title?: StringNullableFilter;
};
