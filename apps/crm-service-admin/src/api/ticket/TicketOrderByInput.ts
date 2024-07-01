import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  product?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
