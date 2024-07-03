import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="EndDate" source="endDate" />
        <DateTimeInput label="StartDate" source="startDate" />
        <NumberInput label="TotalCost" source="totalCost" />
      </SimpleForm>
    </Edit>
  );
};
