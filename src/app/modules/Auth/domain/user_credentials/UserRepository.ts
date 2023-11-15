import { IToken } from "./IToken";
import { IUser } from "./IUser";

export interface UserRepository {
  getToken(email: string, password: string): Promise<void>;

  getUserData(): Promise<IUser>;
}
