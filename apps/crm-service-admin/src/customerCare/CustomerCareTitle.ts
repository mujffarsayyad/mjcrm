import { CustomerCare as TCustomerCare } from "../api/customerCare/CustomerCare";

export const CUSTOMERCARE_TITLE_FIELD = "customerName";

export const CustomerCareTitle = (record: TCustomerCare): string => {
  return record.customerName?.toString() || String(record.id);
};
