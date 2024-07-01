import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AnalysisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="analysisReportName" source="analysisReportName" />
        <TextInput label="createdBy" source="createdBy" />
        <div />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Create>
  );
};
