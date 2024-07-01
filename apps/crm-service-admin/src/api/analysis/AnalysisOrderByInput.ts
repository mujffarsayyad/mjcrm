import { SortOrder } from "../../util/SortOrder";

export type AnalysisOrderByInput = {
  analysisReportData?: SortOrder;
  analysisReportName?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  reportData?: SortOrder;
  reportName?: SortOrder;
  updatedAt?: SortOrder;
};
