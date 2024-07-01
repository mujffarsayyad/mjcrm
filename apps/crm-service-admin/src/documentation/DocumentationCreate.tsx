import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DocumentationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="createdBy" source="createdBy" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
