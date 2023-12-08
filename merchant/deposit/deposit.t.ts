export enum EDepositStatus {
	NEW = "new",
	WAITING = "waiting",
	EXPIRED = "expired",
	REJECTED = "rejected",
	PAID = "paid",
	CANCELED = "canceled",
	FAILED = "failed",
}

export interface ICreate {
  way: string;
  amount: number;
  internalID: string;
  customerID: string;
  description: string;
  ip: string;
}


export interface IResponse {
  id: string;
  status: EDepositStatus;
  createdAt: Date;
  updatedAt: Date;
};

