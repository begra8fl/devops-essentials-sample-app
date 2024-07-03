import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  pricePerNight?: SortOrder;
  updatedAt?: SortOrder;
};
