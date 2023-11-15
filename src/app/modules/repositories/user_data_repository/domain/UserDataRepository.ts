import { Token } from "./Token";

export interface UserDataRepository {
  getUserData(): Promise<Token>;
}
