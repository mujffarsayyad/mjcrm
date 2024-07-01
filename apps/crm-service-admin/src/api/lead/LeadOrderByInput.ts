import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  leadContactInfo?: SortOrder;
  leadFullName?: SortOrder;
  leadName?: SortOrder;
  leadSource?: SortOrder;
  leadStatus?: SortOrder;
  source?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
