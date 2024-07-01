import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PaymentGatewayCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <div />
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="gatewayName" source="gatewayName" />
      </SimpleForm>
    </Create>
  );
};
