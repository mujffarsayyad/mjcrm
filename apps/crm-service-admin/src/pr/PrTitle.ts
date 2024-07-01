import { Pr as TPr } from "../api/pr/Pr";

export const PR_TITLE_FIELD = "campaignName";

export const PrTitle = (record: TPr): string => {
  return record.campaignName?.toString() || String(record.id);
};
