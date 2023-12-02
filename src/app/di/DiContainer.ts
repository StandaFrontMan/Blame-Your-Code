import { AuthRepository } from "../modules/sign_in/domain/user_credentials/AuthRepository";
import { UserDataRepository } from "../core/user/domain/UserDataRepository";
import { UserRegistrationRepository } from "../modules/sign_up/domain/UserRegistrationRepository";
import { UserDataChangeRepository } from "../modules/profile/user_settings/domain/UserDataChangeRepository";
import { PostSubmitionRepository } from "../modules/create_post/domain/PostSubmitionRepository";

export interface DiContainer {
  getAuthRepository(): AuthRepository;
  getUserDataRepository(): UserDataRepository;
  getUserRegistrationRepository(): UserRegistrationRepository;
  updateUserDataChangeRepository(): UserDataChangeRepository;
  createPostSubmitionRepository(): PostSubmitionRepository;
}
