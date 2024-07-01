import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CustomerCareShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contactMethod" source="contactMethod" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerName" source="customerName" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="issue" source="issue" />
        <TextField label="resolution" source="resolution" />
        <TextField label="resolvedBy" source="resolvedBy" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
