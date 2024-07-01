import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const OpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assignedTo" source="assignedTo" />
        <DateTimeInput label="closeDate" source="closeDate" />
        <TextInput label="opportunityName" source="opportunityName" />
        <SelectInput
          source="stage"
          label="stage"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
