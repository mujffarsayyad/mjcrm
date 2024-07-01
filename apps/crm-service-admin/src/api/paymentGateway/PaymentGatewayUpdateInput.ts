import { InputJsonValue } from "../../types";

export type PaymentGatewayUpdateInput = {
  createdBy?: string | null;
  credentials?: InputJsonValue;
  enabled?: boolean | null;
  gatewayName?: string | null;
};
