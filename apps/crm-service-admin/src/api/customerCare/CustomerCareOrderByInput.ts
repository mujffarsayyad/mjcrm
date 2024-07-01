import { SortOrder } from "../../util/SortOrder";

export type CustomerCareOrderByInput = {
  contactMethod?: SortOrder;
  createdAt?: SortOrder;
  customerName?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  issue?: SortOrder;
  resolution?: SortOrder;
  resolvedBy?: SortOrder;
  updatedAt?: SortOrder;
};
