import { SortOrder } from "../../util/SortOrder";

export type OpportunityOrderByInput = {
  assignedTo?: SortOrder;
  closeDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  opportunityName?: SortOrder;
  stage?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
