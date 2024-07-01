import { InputJsonValue } from "../../types";

export type PaymentGatewayCreateInput = {
  createdBy?: string | null;
  credentials?: InputJsonValue;
  enabled?: boolean | null;
  gatewayName?: string | null;
};
