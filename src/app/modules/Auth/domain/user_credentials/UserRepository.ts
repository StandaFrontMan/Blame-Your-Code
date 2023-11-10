import { IToken } from "./IToken";
import { IUser } from "./IUser";

export interface UserRepository {
  getToken(
    email: string | undefined,
    password: string | undefined
  ): Promise<IToken>;

  getUserData(token: any): Promise<IUser>;
}
