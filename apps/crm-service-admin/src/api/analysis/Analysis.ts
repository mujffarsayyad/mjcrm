import { JsonValue } from "type-fest";

export type Analysis = {
  analysisReportData: JsonValue;
  analysisReportName: string | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  reportData: JsonValue;
  reportName: string | null;
  updatedAt: Date;
};
