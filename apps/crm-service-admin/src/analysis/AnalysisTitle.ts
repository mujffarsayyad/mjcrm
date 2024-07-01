import { Analysis as TAnalysis } from "../api/analysis/Analysis";

export const ANALYSIS_TITLE_FIELD = "analysisReportName";

export const AnalysisTitle = (record: TAnalysis): string => {
  return record.analysisReportName?.toString() || String(record.id);
};
