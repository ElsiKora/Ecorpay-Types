import * as BalanceType from './balance/balance.t';
import * as AuthType from './auth/auth.t';
import * as WalletType from './wallet/wallet.t';
import * as UserType from './user/user.t';
import * as WayType from './way/way.t';
import * as DepositType from './payment/deposit/deposit.t';
import { TPaginationResponse } from '../shared/shared.t';

export declare namespace User {
  namespace Balance {
    export type TCreate = BalanceType.ICreate;
    export type TFindByTd = BalanceType.IFindById;
    export type TResponse = BalanceType.IResponse;
    export type TResponsePagination = TPaginationResponse<BalanceType.IResponse>
  }
  namespace Owner {
    export type TPatch = UserType.ICreate;
    export type TResponse = UserType.IResponse;
  }
  namespace Way {
    export type TFindById = WayType.IFindById;
    export type TResponse = WayType.IResponse;
    export type TResponsePagination = TResponsePagination<WayType.IResponse>;
  }
  namespace Way {
    export type TFindById = WalletType.IFindById;
    export type TResponse = WalletType.TResponse;
  }
  namespace Auth {
    export type TCreate = AuthType.ICreate;
    export type TPatch = AuthType.IPatch;
    export type TResponsePatch = AuthType.IResponsePatch;
    export type TResponseCreate = AuthType.IResponseCreate;
  }
  namespace Wallet {
    export type TFindById = WalletType.IFindById;
    export type TResponse = WalletType.TResponse;
  }
  namespace Deposit {
    export type TCreate = DepositType.ICreate;
    export type TResponseCreate = DepositType.TResponseCreate;
    export type TPaginationFilters = DepositType.TPaginationFilters;
    export type TResponse = DepositType.ICreate;
    export type TResponsePagination = TPaginationResponse<DepositType.IResponse>
  }
}
