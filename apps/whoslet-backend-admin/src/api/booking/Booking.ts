export type Booking = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  totalCost: number | null;
  updatedAt: Date;
};
