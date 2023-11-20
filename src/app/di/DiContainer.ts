import { AuthRepository } from "../modules/sign_in/domain/user_credentials/AuthRepository";
import { UserDataRepository } from "../core/user/domain/UserDataRepository";
import { UserRegistrationRepository } from "../modules/sign_up/domain/UserRegistrationRepository";

export interface DiContainer {
  getAuthRepository(): AuthRepository;
  getUserDataRepository(): UserDataRepository;
  getUserRegistrationRepository(): UserRegistrationRepository;
}
