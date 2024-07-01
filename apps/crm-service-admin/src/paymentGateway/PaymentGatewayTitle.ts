import { PaymentGateway as TPaymentGateway } from "../api/paymentGateway/PaymentGateway";

export const PAYMENTGATEWAY_TITLE_FIELD = "gatewayName";

export const PaymentGatewayTitle = (record: TPaymentGateway): string => {
  return record.gatewayName?.toString() || String(record.id);
};
