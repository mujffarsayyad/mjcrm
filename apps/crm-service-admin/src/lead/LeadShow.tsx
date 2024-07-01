import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contactInfo" source="contactInfo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="leadContactInfo" source="leadContactInfo" />
        <TextField label="leadFullName" source="leadFullName" />
        <TextField label="leadName" source="leadName" />
        <TextField label="leadSource" source="leadSource" />
        <TextField label="leadStatus" source="leadStatus" />
        <TextField label="source" source="source" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
