import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnalysisWhereInput = {
  analysisReportData?: JsonFilter;
  analysisReportName?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  reportData?: JsonFilter;
  reportName?: StringNullableFilter;
};
