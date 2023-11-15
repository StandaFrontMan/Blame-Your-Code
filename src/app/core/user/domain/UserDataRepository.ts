import { User } from "./User";

export interface UserDataRepository {
  getUserData(): Promise<User>;
}
