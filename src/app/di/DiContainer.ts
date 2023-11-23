import { AuthRepository } from "../modules/sign_in/domain/user_credentials/AuthRepository";
import { UserDataRepository } from "../core/user/domain/UserDataRepository";
import { UserRegistrationRepository } from "../modules/sign_up/domain/UserRegistrationRepository";
import { UserDataChangeRepository } from "../modules/profile/user_settings/domain/UserDataChangeRepository";

export interface DiContainer {
  getAuthRepository(): AuthRepository;
  getUserDataRepository(): UserDataRepository;
  getUserRegistrationRepository(): UserRegistrationRepository;
  updateUserDataChangeRepository(): UserDataChangeRepository;
}
