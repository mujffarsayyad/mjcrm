import { JsonValue } from "type-fest";

export type PaymentGateway = {
  createdAt: Date;
  createdBy: string | null;
  credentials: JsonValue;
  enabled: boolean | null;
  gatewayName: string | null;
  id: string;
  updatedAt: Date;
};
