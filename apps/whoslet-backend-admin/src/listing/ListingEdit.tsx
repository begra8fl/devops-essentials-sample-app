import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <NumberInput label="PricePerNight" source="pricePerNight" />
      </SimpleForm>
    </Edit>
  );
};
