import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CustomerCareEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
