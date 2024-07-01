import { SortOrder } from "../../util/SortOrder";

export type PaymentGatewayOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  credentials?: SortOrder;
  enabled?: SortOrder;
  gatewayName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
