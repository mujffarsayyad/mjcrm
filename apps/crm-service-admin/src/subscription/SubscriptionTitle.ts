import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "customerName";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.customerName?.toString() || String(record.id);
};
