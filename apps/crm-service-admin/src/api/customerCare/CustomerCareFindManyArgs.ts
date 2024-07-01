import { CustomerCareWhereInput } from "./CustomerCareWhereInput";
import { CustomerCareOrderByInput } from "./CustomerCareOrderByInput";

export type CustomerCareFindManyArgs = {
  where?: CustomerCareWhereInput;
  orderBy?: Array<CustomerCareOrderByInput>;
  skip?: number;
  take?: number;
};
