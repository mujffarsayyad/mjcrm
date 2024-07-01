import { PrWhereInput } from "./PrWhereInput";
import { PrOrderByInput } from "./PrOrderByInput";

export type PrFindManyArgs = {
  where?: PrWhereInput;
  orderBy?: Array<PrOrderByInput>;
  skip?: number;
  take?: number;
};
