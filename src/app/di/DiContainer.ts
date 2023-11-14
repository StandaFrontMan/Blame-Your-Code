import { UserRepository } from "../modules/Auth/domain/user_credentials/UserRepository";

export interface DiContainer {
  getUserRepository(): UserRepository;
}
