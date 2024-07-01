import { SortOrder } from "../../util/SortOrder";

export type GoalOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  goalName?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
