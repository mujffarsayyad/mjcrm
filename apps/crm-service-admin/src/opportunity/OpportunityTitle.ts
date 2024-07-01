import { Opportunity as TOpportunity } from "../api/opportunity/Opportunity";

export const OPPORTUNITY_TITLE_FIELD = "opportunityName";

export const OpportunityTitle = (record: TOpportunity): string => {
  return record.opportunityName?.toString() || String(record.id);
};
