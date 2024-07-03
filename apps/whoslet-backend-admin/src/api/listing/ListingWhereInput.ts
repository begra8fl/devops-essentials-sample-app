import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ListingWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  pricePerNight?: FloatNullableFilter;
};
