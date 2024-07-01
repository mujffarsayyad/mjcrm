import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="analysisReportName" source="analysisReportName" />
        <TextInput label="createdBy" source="createdBy" />
        <div />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Edit>
  );
};
