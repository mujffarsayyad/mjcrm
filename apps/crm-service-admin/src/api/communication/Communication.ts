export type Communication = {
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  receivedBy: string | null;
  sentBy: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
