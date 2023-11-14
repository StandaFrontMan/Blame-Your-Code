import { IToken } from "./IToken";
import { IUser } from "./IUser";

export interface UserRepository {
  getToken(email: string, password: string): Promise<string>;

  getUserData(token: string): Promise<IUser>;
}
