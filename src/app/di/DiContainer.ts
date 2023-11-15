import { AuthRepository } from "../modules/Auth/domain/user_credentials/AuthRepository";
import { UserDataRepository } from "../core/user/domain/UserDataRepository";

export interface DiContainer {
  getAuthRepository(): AuthRepository;
  getUserDataRepository(): UserDataRepository;
}
