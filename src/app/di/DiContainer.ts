import { AuthRepository } from "../modules/Auth/domain/user_credentials/AuthRepository";
import { UserDataRepository } from "../modules/repositories/user_data_repository/domain/UserDataRepository";

export interface DiContainer {
  getAuthRepository(): AuthRepository;
  getUserDataRepository(): UserDataRepository;
}
