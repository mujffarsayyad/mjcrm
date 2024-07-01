import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  contactInfo?: StringNullableFilter;
  id?: StringFilter;
  leadContactInfo?: StringNullableFilter;
  leadFullName?: StringNullableFilter;
  leadName?: StringNullableFilter;
  leadSource?: "Option1";
  leadStatus?: "Option1";
  source?: "Option1";
  status?: "Option1";
};
