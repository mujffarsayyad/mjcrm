import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerCareList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerCares"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="contactMethod" source="contactMethod" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerName" source="customerName" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="issue" source="issue" />
        <TextField label="resolution" source="resolution" />
        <TextField label="resolvedBy" source="resolvedBy" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
