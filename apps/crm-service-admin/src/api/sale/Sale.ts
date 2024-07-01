export type Sale = {
  amount: number | null;
  createdAt: Date;
  customer: string | null;
  date: Date | null;
  id: string;
  product?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
