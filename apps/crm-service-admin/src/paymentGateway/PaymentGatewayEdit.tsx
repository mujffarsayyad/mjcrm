import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PaymentGatewayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <div />
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="gatewayName" source="gatewayName" />
      </SimpleForm>
    </Edit>
  );
};
