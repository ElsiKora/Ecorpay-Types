import * as BalanceType from './balance/balance.t';
import * as AuthType from './auth/auth.t';
import * as WalletType from './wallet/wallet.t';

export declare namespace User {
  namespace Balance {
    export type TCreate = BalanceType.ICreate;
    export type TFindByTd = LanguageType.IFindById;
    export type TResponse = LanguageType.IResponse;
    export type TResponsePagination = TPaginationResponse<Language.IResponse>
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
}
