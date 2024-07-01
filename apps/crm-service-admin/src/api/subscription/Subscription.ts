export type Subscription = {
  createdAt: Date;
  customerName: string | null;
  endDate: Date | null;
  id: string;
  product?: "Option1" | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
