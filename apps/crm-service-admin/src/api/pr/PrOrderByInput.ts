import { SortOrder } from "../../util/SortOrder";

export type PrOrderByInput = {
  campaignName?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  details?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
