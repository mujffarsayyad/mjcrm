import { Communication as TCommunication } from "../api/communication/Communication";

export const COMMUNICATION_TITLE_FIELD = "receivedBy";

export const CommunicationTitle = (record: TCommunication): string => {
  return record.receivedBy?.toString() || String(record.id);
};
