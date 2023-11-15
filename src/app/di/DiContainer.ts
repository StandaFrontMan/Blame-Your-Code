import { UserRepository } from "../modules/Auth/domain/user_credentials/UserRepository";
import { UserDataRepository } from "../modules/profile/domain/UserDataRepository";

export interface DiContainer {
  getUserRepository(): UserRepository;
  getUserDataRepository(): UserDataRepository;
}
