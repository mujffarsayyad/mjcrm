export type Opportunity = {
  assignedTo: string | null;
  closeDate: Date | null;
  createdAt: Date;
  id: string;
  opportunityName: string | null;
  stage?: "Option1" | null;
  updatedAt: Date;
  value: number | null;
};
