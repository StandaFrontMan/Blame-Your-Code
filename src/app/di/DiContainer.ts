import { AuthRepository } from "../modules/Auth/domain/user_credentials/AuthRepository";
import { UserDataRepository } from "../core/user/domain/UserDataRepository";
import { UserRegistrationRepository } from "../modules/registration/domain/UserRegistrationRepository";

export interface DiContainer {
  getAuthRepository(): AuthRepository;
  getUserDataRepository(): UserDataRepository;
  getUserRegistrationRepository(): UserRegistrationRepository;
}
