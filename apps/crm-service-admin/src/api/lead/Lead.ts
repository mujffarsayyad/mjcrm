export type Lead = {
  contactInfo: string | null;
  createdAt: Date;
  id: string;
  leadContactInfo: string | null;
  leadFullName: string | null;
  leadName: string | null;
  leadSource?: "Option1" | null;
  leadStatus?: "Option1" | null;
  source?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
