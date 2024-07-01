import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "leadFullName";

export const LeadTitle = (record: TLead): string => {
  return record.leadFullName?.toString() || String(record.id);
};
