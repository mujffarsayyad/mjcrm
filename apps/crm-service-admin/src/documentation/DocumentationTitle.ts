import { Documentation as TDocumentation } from "../api/documentation/Documentation";

export const DOCUMENTATION_TITLE_FIELD = "title";

export const DocumentationTitle = (record: TDocumentation): string => {
  return record.title?.toString() || String(record.id);
};
