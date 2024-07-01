import { InputJsonValue } from "../../types";

export type AnalysisCreateInput = {
  analysisReportData?: InputJsonValue;
  analysisReportName?: string | null;
  createdBy?: string | null;
  reportData?: InputJsonValue;
  reportName?: string | null;
};
