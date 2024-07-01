import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CustomerCareCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="contactMethod"
          label="contactMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="customerName" source="customerName" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="issue" multiline source="issue" />
        <TextInput label="resolution" multiline source="resolution" />
        <TextInput label="resolvedBy" source="resolvedBy" />
      </SimpleForm>
    </Create>
  );
};
