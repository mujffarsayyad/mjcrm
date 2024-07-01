import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  product?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
