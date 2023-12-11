import *  as MerchantType from './merchant/merchant.t';
import * as WaysType from './ways/ways.t';
import * as DepositType from './deposit/deposit.t';
import * as TransferType from './transfer/transfer.t';
import * as WalletType from './wallet/wallet.t';
import { TPaginationResponse } from '../shared/shared.t';

export declare namespace Merchant {
  namespace Ways {
    export type TCreate = MerchantType.ICreate;
    export type TFindByTd = MerchantType.IFindById;
    export type TUpdate = MerchantType.IUpdate;
    export type TDelete = MerchantType.IDelete;
    export type TResponseCreate = MerchantType.IResponseCreate;
    export type TResponseFindById = WaysType.IResponse;
    export type TResponsePagination = TPaginationResponse<MerchantType.IResponse>
  };
  namespace Deposit {
    export type TCreate = DepositType.ICreate;
    export type TResponse = DepositType.IResponse;
  };
  namespace Transfer {
    export type TCreate = TransferType.ICreate;
    export type TResponse = TransferType.IResponse;
  };
  namespace Wallet {
    export type TCreate = WalletType.ICreate;
    export type TResponse = WalletType.IResponse;
  };
}
