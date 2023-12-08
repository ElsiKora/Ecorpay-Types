export interface IMerchantFee {
  value: {
    deposit: number;
    transfer: number;
  };
  depositRatio: number;
  transferType: boolean;
}

export type TPurseType = 'wallet' | 'card';
export type TCurrencyType = 'crypto' | 'fiat';

interface IWayType {
  id: string;
  name: string;
  pursePattern: string;
  purseType: TPurseType;
  mask: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IWayCurrency {
  id: string;
  code: string;
  type: TCurrencyType;
  precision: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IResponse {
  id: string;
  type: IWayType;
  deposit: boolean;
  currency: IWayCurrency;
  transfer: boolean;
  fee: IMerchantFee;
  enabled: boolean;
}


/*
export interface IResponse extends IResponseCreate {
  balance: IMerchantBalance;
  ways: IResponseFindById;
  callback: IMerchantCallbacks;
  key: string;
  secret: string;
  updatedAt: Date;
}
*/