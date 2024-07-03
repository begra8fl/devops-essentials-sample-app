import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <NumberInput label="PricePerNight" source="pricePerNight" />
      </SimpleForm>
    </Create>
  );
};
