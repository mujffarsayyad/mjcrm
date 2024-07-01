import { SortOrder } from "../../util/SortOrder";

export type CommunicationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  receivedBy?: SortOrder;
  sentBy?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
