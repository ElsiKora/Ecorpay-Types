import { IResponse as IWay } from "../ways/ways.t";

export enum ETransferStatus {
	NEW = "new",
	WAITING = "waiting",
	PROCESS = "process",
	PAID = "paid",
	FAILED = "failed",
}

export enum ETransferType {
	EXTERNAL = "external",
	INTERNAL = "internal",
}

export interface ICreate {
  way: string;
  amount: number;
  internalID: string;
  customerID: string;
  purse: '',
  description: string;
  ip: string;
}


export interface IResponse {
  id: string;
  amount: number;
  way: IWay;
  merchant: { name: string };
  description: string;
  status: ETransferStatus;
  purse: string;
  type: ETransferType;
  fee: { internal: number; transferType: boolean; }
  createdAt: Date;
  updatedAt: Date;
};

