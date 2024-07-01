import { SortOrder } from "../../util/SortOrder";

export type SupportOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  issue?: SortOrder;
  priority?: SortOrder;
  resolution?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
