import { UserRepository } from "../modules/Auth/domain/user_credentials/UserRepository";
import { UserDataRepository } from "../modules/repositories/user_data_repository/domain/UserDataRepository";

export interface DiContainer {
  getUserRepository(): UserRepository;
  getUserDataRepository(): UserDataRepository;
}
