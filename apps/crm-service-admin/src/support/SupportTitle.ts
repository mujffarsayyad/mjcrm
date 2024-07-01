import { Support as TSupport } from "../api/support/Support";

export const SUPPORT_TITLE_FIELD = "assignedTo";

export const SupportTitle = (record: TSupport): string => {
  return record.assignedTo?.toString() || String(record.id);
};
